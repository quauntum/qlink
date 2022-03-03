import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { RootState } from '../../types/states';
import styledOmitProps from '../../utils/styledOmitProps';
import mobileMedia from '../../utils/mobileMedia';
import { acceptGdpr } from '../../actions/ui';
import { GDPR_VERSION } from '../../utils/constants';
import getLandingLink from '../../utils/getLandingLink';
import { ZIndices } from '../../types/enums';

type Props = {
  gdprVersion: number | undefined;
  acceptGdpr: typeof acceptGdpr;
};

const NOTICE =
  'This website uses cookies and stores data locally to help personalize your experience.';
const LEARN_MORE = 'Learn more';
const ACCEPT = 'Accept';

class GdprNotification extends React.Component<Props> {
  render() {
    const isVisible = (this.props.gdprVersion || 0) < GDPR_VERSION;

    return (
      <GdprNotificationRoot
        role="alert"
        data-testid="gdpr-alert"
        isVisible={isVisible}
        aria-hidden={!isVisible}
      >
        <Notice>{NOTICE}</Notice>
        <StyledA
          href={`${getLandingLink()}/legal/privacy`}
          target="_blank"
          rel="noopener noreferrer"
          aria-hidden={!isVisible}
          tabIndex={isVisible ? 0 : -1}
          data-testid="gdpr-privacy-link"
        >
          {LEARN_MORE}
        </StyledA>
        <LinkButton
          onClick={this.props.acceptGdpr}
          disabled={!isVisible}
          data-testid="gdpr-accept-button"
        >
          {ACCEPT}
        </LinkButton>
      </GdprNotificationRoot>
    );
  }
}

export default connect(
  (state: RootState) => ({
    gdprVersion: state.ui.persist.gdprVersion
  }),
  {
    acceptGdpr
  }
)(GdprNotification);

const GdprNotificationRoot = styledOmitProps<{ isVisible: boolean }>('div', [
  'isVisible'
])`
  position: fixed;
  z-index: ${ZIndices.GDPRNotification};
  transform: translateY(${p => (p.isVisible ? 0 : '120%')});
  transition: transform 0.2s ease-out;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  margin: 0 auto;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  color: ${p => p.theme.fgColor};
  background-color: ${p => p.theme.chatBgColor};

  ${mobileMedia`
    flex-wrap: wrap;
    padding: 1.5rem 2rem;
    font-size: 16px;
    justify-content: space-between;
  `};
`;

const Notice = styled.div`
  flex: 1 1 auto;

  ${mobileMedia`
    flex: 1 0 100%;
    margin-bottom: 1.5rem;
  `};
`;

const LinkButton = styled.button`
  flex: 0 0 auto;
  margin: 0;
  border: 0;
  padding: 0;
  text-decoration: underline;
  background-color: inherit;
  font-size: inherit;
  color: ${p => p.theme.fgColor};
  margin-left: 2rem;
  cursor: pointer;

  ${mobileMedia`
    margin-left: 0;
    text-align: center;
  `};
`;

const StyledA = LinkButton.withComponent('a');
