import * as React from 'react';
import styled from 'styled-components/macro';
import ReplikaCard from '../ReplikaCard';
import { Bot, UserProfile } from '../../types/models';
import ComponentWithPhrase from '../ComponentWithPhrase';
import { useMobileQuery } from '../responsive';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  phraseText: string | null;
  expiration?: string;
  bot?: Bot | undefined;
  isProUser: boolean;
  hasCurrentMission?: boolean;
  showStatusButton: boolean;
  userProfile?: UserProfile | undefined;
  onSelectStatusClick: () => void;
  children?: React.ReactNode;
};

const ReplikaCardWithPhrase = ({
  className,
  style,
  phraseText,
  expiration,
  bot,
  isProUser,
  hasCurrentMission,
  userProfile,
  showStatusButton,
  onSelectStatusClick,
  children,
}: Props) => {
  const isMobile = useMobileQuery();

  const showAvatar = !!bot?.avatar;

  return (
    <ComponentWithPhrase
      className={className}
      style={style}
      hasCurrentMission={hasCurrentMission}
      phraseText={phraseText}
      phrasePosition={isMobile ? 'left' : 'right'}
      xOffset={25}
      bottomOffset={showAvatar ? 130 : 40}
    >
      <StyledReplikaCard
        bot={bot}
        isProUser={isProUser}
        userProfile={userProfile}
        onSelectStatusClick={onSelectStatusClick}
        showStatusButton={showStatusButton}
        progressPosition={isMobile ? 'right' : 'left'}
      >
        {children}
      </StyledReplikaCard>
    </ComponentWithPhrase>
  );
};

export default ReplikaCardWithPhrase;

const StyledReplikaCard = styled(ReplikaCard)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;
