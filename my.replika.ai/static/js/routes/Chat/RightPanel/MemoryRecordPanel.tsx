import * as React from 'react';
import styled from 'styled-components/macro';
import { uniq } from 'lodash';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import SidebarLayout, {
  SidebarButton,
} from '../../../components/SidebarLayout';
import { Routes, ZIndices } from '../../../types/enums';
import useApi from '../../../utils/useApi';
import { getMemory, getMemoryRelations } from '../../../actions/memory';
import { MemoryPerson, MemoryFact } from '../../../types/models';
import useBotName from '../../../utils/useBotName';
import LabeledTextInput from '../../../components/LabeledTextInput';
import Dropdown from '../../../components/Dropdown';
import IconButton from '../../../components/IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/Delete.svg';
import Popover from '../../../components/Popover';
import DeleteMemoryPopover from './DeleteMemoryPopover';
import mobileMedia from '../../../utils/mobileMedia';
import { deleteMemory, updateMemoryPerson } from '../../../actions/memory';
import ErrorSuccessMessage from '../../../components/ErrorSuccessMessage';

type Props = {
  className?: string;
  memoryId: string;
  memoryType: 'persons' | 'facts';
};

function MemoryPersonBody({ person }: { person: MemoryPerson }) {
  const dispatch = useDispatch();
  const [error, setError] = React.useState<null | string>(null);

  const relations = useApi(
    (state) => state.memory.persist.relations,
    getMemoryRelations
  );
  const categories = uniq(relations.map((r) => r.category));
  const selectedCategory = relations.find((r) => r.name === person.relation)
    ?.category;

  const [name, setName] = React.useState(person.name);
  const [relationCategory, setRelationCategory] = React.useState(
    selectedCategory
  );
  const [relation, setRelation] = React.useState(person.relation);

  const botName = useBotName();
  const description = `Change name and relationship so ${botName} can learn more about your world and your loved ones`;

  const relationOptions = relations
    .filter((r) => r.category === relationCategory)
    .map((r) => ({ label: r.name, value: r.name }));
  const selectedRelation = relationOptions.find((r) => r.value === relation);

  const categoryOptions = categories.map((category) => ({
    label: category,
    value: category,
  }));
  const selectedCategoryOpt = categoryOptions.find(
    (c) => c.value === relationCategory
  );

  React.useEffect(() => {
    const rel = relations
      .filter((r) => r.category === relationCategory)
      .find((r) => r.name === person.relation);

    setRelation(rel?.name);
  }, [relationCategory, relations, person]);

  return (
    <MemoryPersonBodyRoot>
      <MemoryPersonDescription>{description}</MemoryPersonDescription>
      <LabeledTextInput
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setError(null);
          setName(e.target.value);
        }}
      />
      <StyledDropdown
        id="category"
        options={categoryOptions}
        placeholder="Relationship"
        value={selectedCategoryOpt}
        onChange={(opt) => {
          setError(null);
          setRelationCategory(opt.value);
        }}
      />
      {selectedCategoryOpt && (
        <StyledDropdown
          id="relationship"
          options={relationOptions}
          placeholder="Specify relationship"
          value={selectedRelation}
          onChange={(opt) => {
            setError(null);
            setRelation(opt.value);
          }}
        />
      )}
      <ErrorSuccessMessage hasError={!!error}>{error}</ErrorSuccessMessage>
      <SidebarButton
        disabled={person.relation === relation && person.name === name}
        onClick={async () => {
          try {
            await dispatch(updateMemoryPerson(person.id, { name, relation }));
            dispatch(push(Routes.Memory));
          } catch (e) {
            setError(e.message);
          }
        }}
      >
        Save
      </SidebarButton>
    </MemoryPersonBodyRoot>
  );
}

const MemoryPersonBodyRoot = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const MemoryPersonDescription = styled.p`
  color: ${(p) => p.theme.dimmedFgColor};
  margin: 0 auto 30px;
  max-width: 260px;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
`;

const StyledDropdown = styled(Dropdown)`
  margin-top: 24px;
`;

function MemoryFactBody({ fact }: { fact: MemoryFact }) {
  return <MemoryRecordBody>{fact.text}</MemoryRecordBody>;
}

function MemoryRecordPanel({ className, memoryType, memoryId }: Props) {
  const [facts, persons] = useApi(
    (state) => [state.memory.persist.facts, state.memory.persist.persons],
    getMemory
  );

  const dispatch = useDispatch();

  const [deleteMemoryOpen, setDeleteMemoryOpen] = React.useState(false);

  let body;
  let deleteLabel;
  if (memoryType === 'persons') {
    const person = persons.find((p) => p.id === memoryId);
    body = person && <MemoryPersonBody person={person} />;
    deleteLabel = 'delete person';
  } else {
    const fact = facts.find((f) => f.id === memoryId);
    body = fact && <MemoryFactBody fact={fact} />;
    deleteLabel = 'delete fact';
  }

  return (
    <MemoryRecordPanelRoot
      backTo={Routes.Memory}
      data-testid={`memory-record-${memoryId}`}
      title="Memory"
      className={className}
    >
      <MemoryRecordContent>
        {body}
        <MemoryRecordFooter>
          <StyledPopover
            preferPlace="above"
            isOpen={deleteMemoryOpen}
            onClose={() => setDeleteMemoryOpen(false)}
            onRenderContent={(p) => (
              <DeleteMemoryPopover
                memoryType={memoryType}
                data-testid={`memory-record-${memoryId}-delete-popover`}
                onDelete={async () => {
                  setDeleteMemoryOpen(false);
                  await dispatch(deleteMemory(memoryType, memoryId));
                  dispatch(push(Routes.Memory));
                }}
                {...p}
              />
            )}
            closeOnOuterAction
            size="small"
          >
            <IconButton
              label={deleteLabel}
              onClick={() => setDeleteMemoryOpen(true)}
            >
              <DeleteIcon aria-hidden="true" />
            </IconButton>
          </StyledPopover>
        </MemoryRecordFooter>
      </MemoryRecordContent>
    </MemoryRecordPanelRoot>
  );
}

export default MemoryRecordPanel;

const MemoryRecordPanelRoot = styled(SidebarLayout)``;

const MemoryRecordContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const MemoryRecordBody = styled.div`
  padding: 24px;
  flex: 1 0 auto;
  border-radius: 4px;
  overflow: hidden;
  color: ${(p) => p.theme.fgColor};
  background: ${(p) => p.theme.chatBgColor};
`;

const MemoryRecordFooter = styled.div`
  min-height: 54px;
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(p) => p.theme.fgColor};
`;

const StyledPopover = styled(Popover)`
  z-index: ${ZIndices.Dialog + 1};
  ${mobileMedia`
    max-width: 270px;
  `};
`;
