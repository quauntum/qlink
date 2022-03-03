import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { RootState } from '../../../types/states';
import { FeedbackType, Bot } from '../../../types/models';
import { closeFeedbackPopup } from '../../../actions/feedback';
import SolidButton from '../../SolidButton';
import { ReactDispatch as RD } from '../../../types/redux';
import mobileMedia from '../../../utils/mobileMedia';

type Props = {
  closeFeedbackPopup: RD<typeof closeFeedbackPopup>;
  submittedFeedbackType: FeedbackType | null;
  bot: Bot | undefined;
};

const SubmittedMessage = (p: Props) => {
  const name = p.bot?.name ?? 'your Replika';

  return (
    <>
      <FeedbackMessage>
        <p>
          Thank you for your feedback!
          <br /> It helps improve conversation
          <br /> with {name}.
        </p>
      </FeedbackMessage>
      <StyledButton size="small" onClick={() => p.closeFeedbackPopup()}>
        OK
      </StyledButton>
    </>
  );
};

export default connect((state: RootState) => ({
  bot: state.profile.persist.bot
}))(SubmittedMessage);

const FeedbackMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 30px;

  & p {
    line-height: 22px;
    font-size: 16px;
    text-align: center;
    color: ${p => p.theme.popupFgColor};
  }

  ${mobileMedia`
    flex: 1 0 auto;
  `}
`;

const StyledButton = styled(SolidButton)`
  width: unset;
  align-self: center;
`;
