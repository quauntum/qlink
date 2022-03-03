import * as React from 'react';
import styled from 'styled-components/macro';
import { groupBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import AriaButton from '../../../components/AriaButton';
import SidebarLayout from '../../../components/SidebarLayout';
import { MemoryPerson, MemoryFact } from '../../../types/models';
import { getMemory } from '../../../actions/memory';
import { Routes } from '../../../types/enums';
import useApi from '../../../utils/useApi';
import { useMobileQuery } from '../../../components/responsive';
import useFocusGroup from '../../../utils/useFocusGroup';
import { resetMemoryUnreadCount } from '../../../actions/memory';

type Props = {
  className?: string;
};

function MemoryPersonCard({
  person,
  tabIndex,
}: {
  person: MemoryPerson;
  tabIndex: number;
}) {
  return (
    <MemoryCard
      tabIndex={tabIndex}
      to={Routes.MemoryRecord.replace(':memoryType', 'persons').replace(
        ':memoryId',
        person.id
      )}
    >
      {person.name ?? person.relation}
    </MemoryCard>
  );
}

function MemoryFactCard({
  fact,
  tabIndex,
}: {
  fact: MemoryFact;
  tabIndex: number;
}) {
  return (
    <MemoryCard
      tabIndex={tabIndex}
      to={Routes.MemoryRecord.replace(':memoryType', 'facts').replace(
        ':memoryId',
        fact.id
      )}
    >
      {fact.text}
    </MemoryCard>
  );
}

const MemoryCard = styled(AriaButton)`
  display: block;
  width: 100%;
  text-align: left;
  color: ${(p) => p.theme.fgColor};
  background: ${(p) => p.theme.chatBgColor};
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    text-decoration: none;
  }

  & ~ & {
    margin-top: 8px;
  }

  &.focus-visible:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${(p) => p.theme.outlineColor};
  }
`;

function Memory({ className }: Props) {
  const dispatch = useDispatch();

  const [facts, persons] = useApi(
    (state) => [state.memory.persist.facts, state.memory.persist.persons],
    getMemory
  );

  const unreadCount = useSelector((state) => state.memory.persist.unreadCount);

  const groupedFacts = groupBy(facts, (f) => f.category ?? 'facts about you');

  const isMobile = useMobileQuery();

  const rootElRef = React.useRef<HTMLDivElement>(null);

  useFocusGroup(
    {
      getGroupElements: () => {
        return rootElRef.current?.getElementsByTagName('a') ?? [];
      },
    },
    [facts, persons]
  );

  React.useEffect(() => {
    if (unreadCount > 0) {
      dispatch(getMemory());
      dispatch(resetMemoryUnreadCount());
    }
  }, [dispatch, unreadCount]);

  return (
    <MemoryRoot
      ref={rootElRef}
      backTo={isMobile ? Routes.Conversations : Routes.Main}
      title="Memory"
      data-testid="memory"
      className={className}
    >
      {persons.length > 0 && (
        <CategoryTitle>People and pets in your life</CategoryTitle>
      )}
      {persons.map((person, idx) => (
        <MemoryPersonCard
          person={person}
          key={idx}
          tabIndex={idx === 0 ? 0 : -1}
        />
      ))}
      {Object.keys(groupedFacts).map((category) => {
        return (
          <>
            <CategoryTitle>{category}</CategoryTitle>
            {groupedFacts[category].map((fact, idx) => {
              const totalIdx = idx + persons.length;

              return (
                <MemoryFactCard
                  fact={fact}
                  key={idx}
                  tabIndex={totalIdx === 0 ? 0 : -1}
                />
              );
            })}
          </>
        );
      })}
      {facts.length === 0 && (
        <EmptyScreen>
          <h3>Your Replika still knows very little about you.</h3>
          <p>
            Talk to her and share facts about loved ones, pets, your hobbies and
            interests.
          </p>
        </EmptyScreen>
      )}
    </MemoryRoot>
  );
}

export default Memory;

const MemoryRoot = styled(SidebarLayout)``;

const CategoryTitle = styled.h3`
  text-transform: uppercase;
  color: ${(p) => p.theme.fgColor};
  font-size: 14px;
`;

const EmptyScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;

  color: ${(p) => p.theme.fgColor};

  & > * {
    max-width: 210px;
    font-size: 16px;
    line-height: 21px;
  }

  & > h3 {
    margin: 0;
  }

  & > p {
    margin: 20px 0 80px;
  }
`;
