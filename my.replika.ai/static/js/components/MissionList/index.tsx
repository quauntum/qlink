import * as React from 'react';
import styled from 'styled-components/macro';
import { Mission } from '../../types/models';
import MissionItem from './MissionItem';
import useFocusGroup from '../../utils/useFocusGroup';

type Props = {
  className?: string;
  missions: Mission[];
  onSelect: (track: Mission) => void;
  onShowSubscriptionDialog: () => void;
  'data-testid'?: string;
};

const MissionList = ({
  missions,
  className,
  onSelect,
  onShowSubscriptionDialog,
  'data-testid': dataTestId
}: Props) => {
  const ref = React.useRef<HTMLUListElement>(null);

  const getListElements = () => {
    return ref.current ? ref.current.childNodes : [];
  };

  useFocusGroup(
    {
      getGroupElements: getListElements
    },
    [missions.length]
  );

  return (
    <MissionListRoot ref={ref} className={className} data-testid={dataTestId}>
      {missions.map((mission, idx) => {
        return (
          <MissionItem
            data-testid={dataTestId && `${dataTestId}-item-${idx}`}
            key={mission.id}
            mission={mission}
            tabIndex={idx === 0 ? 0 : -1}
            onSelect={onSelect}
            onShowSubscriptionDialog={onShowSubscriptionDialog}
          />
        );
      })}
    </MissionListRoot>
  );
};

export default MissionList;

const MissionListRoot = styled.ul`
  margin: 0;
  padding: 0 8px;
`;
