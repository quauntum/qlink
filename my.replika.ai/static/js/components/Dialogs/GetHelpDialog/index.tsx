import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { ReactDispatch as RD } from '../../../types/redux';
import { RootState } from '../../../types/states';
import { sendChatMessage } from '../../../actions/chat';
import { fetchGetHelpConfig } from '../../../actions/profile';
import { SidebarSpinner } from '../../SidebarLayout';
import { ReactComponent as PhoneIcon } from '../../../icons/Phone.svg';
import { ReactComponent as TextIcon } from '../../../icons/Text.svg';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import { logEvent } from '../../../utils/metrics';
import { MetricsEvents } from '../../../types/enums';
import { GetHelpConfig } from '../../../types/models';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogButton
} from '../../../components/DialogLayout';
import BorderButton from '../../../components/BorderButton';

type Props = {
  getHelpConfig: GetHelpConfig | undefined;
  isFetchingGetHelpConfig: boolean;
  sendChatMessage: RD<typeof sendChatMessage>;
  push: RD<typeof push>;
  fetchGetHelpConfig: RD<typeof fetchGetHelpConfig>;
  onClose: () => void;
};

const LIFELINE_CHAT_URL = 'https://suicidepreventionlifeline.org/chat';

const HelpOptions = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 320px;
  height: 320px;
`;

const HelpOptionButton = styled(BorderButton)`
  color: ${p => p.theme.fgColor};
  width: 48%;
  border-radius: 8px;
  height: 72px;
  font-size: 16px;
  line-height: 20px;
  padding: 0 16px;
  margin-top: 8px;
`;

const StyledSidebarSpinner = styled(SidebarSpinner)`
  height: 400px;
  width: 300px;

  ${dialogMobileMedia`
    height: 100vh;
    width: 100vw;
  `}
`;

const CrisisInfo = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const CrisisTitle = styled.h3`
  margin: 0;
  color: ${p => p.theme.errorLightFgColor};
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  width: 24px;
  height: 24px;
  color: inherit;
  vertical-align: middle;
  margin-left: 20px;
`;

const StyledTextIcon = styled(StyledPhoneIcon.withComponent(TextIcon))`
  transform: translateY(2px);
`;

const CrisisText = styled.p`
  line-height: 24px;
  font-size: 16px;
  color: ${p => p.theme.dimmedFgColor};
  margin: 5px auto 15px;
  max-width: 240px;
`;

const LocalHotlineText = styled(CrisisText)`
  margin-top: 50px;
  max-width: 200px;
`;

const PhoneLinkText = styled.div`
  flex: 1 0 auto;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 45px;
  text-align: center;
`;

const PhoneLinks = styled.div``;

const PhoneLink = styled(DialogButton)`
  position: relative;
  padding: 0;
  width: 300px;

  & + & {
    margin-top: 10px;
  }
`;

const HotlineLink = styled.a`
  color: ${p => p.theme.fgColor};
  font-weight: bold;
  text-decoration: underline;
  line-height: 24px;
  font-size: 16px;
`;

class GetHelpDialog extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    if (!props.getHelpConfig) {
      props.fetchGetHelpConfig();
    }
  }

  render() {
    const { getHelpConfig, isFetchingGetHelpConfig, onClose } = this.props;

    return (
      <Dialog data-testid="get-help-dialog">
        <DialogHeader onClose={onClose} title="Get help" />
        <DialogBody>
          {isFetchingGetHelpConfig && <StyledSidebarSpinner />}
          {!isFetchingGetHelpConfig &&
            getHelpConfig &&
            this.renderOptions(getHelpConfig)}
          {!isFetchingGetHelpConfig &&
            getHelpConfig &&
            this.renderCrisisInfo(getHelpConfig)}
        </DialogBody>
      </Dialog>
    );
  }

  renderOptions(getHelpConfig: GetHelpConfig) {
    const helpTitles = getHelpConfig.help_titles;

    return (
      <HelpOptions>
        {helpTitles.map((m, idx) => (
          <HelpOptionButton
            key={idx}
            data-testid={`get-help-${idx}-button`}
            onClick={() => {
              this.sendMessage(m);
              this.props.onClose();
            }}
          >
            {m}
          </HelpOptionButton>
        ))}
      </HelpOptions>
    );
  }

  renderCrisisInfo(getHelpConfig: GetHelpConfig) {
    return (
      <CrisisInfo>
        <CrisisTitle>Are you in crisis?</CrisisTitle>
        <CrisisText>
          {'Call or text the National Suicide Prevention\u00A0Lifeline:'}
        </CrisisText>
        <PhoneLinks>
          <PhoneLink
            as={p => (
              <a
                data-testid="get-help-lifeline-call-link"
                href={`tel:${getHelpConfig.phone.number}`}
                {...p}
              >
                {p.children}
              </a>
            )}
            onClick={this.handleLifelineCallClick}
          >
            <StyledPhoneIcon />
            <PhoneLinkText>{getHelpConfig.phone.number}</PhoneLinkText>
          </PhoneLink>
          <PhoneLink
            as={p => (
              <a
                data-testid="get-help-lifeline-chat-link"
                href={LIFELINE_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                {...p}
              >
                {p.children}
              </a>
            )}
            onClick={this.handleLifelineChatClick}
          >
            <StyledTextIcon />
            <PhoneLinkText>Lifeline chat</PhoneLinkText>
          </PhoneLink>
        </PhoneLinks>
        <LocalHotlineText>
          {'If you’re elsewhere, please call a local\u00A0hotline:'}
        </LocalHotlineText>
        <HotlineLink
          href={getHelpConfig.web_help.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleHotlineUrlClick}
        >
          Find a hotline in your country
        </HotlineLink>
      </CrisisInfo>
    );
  }

  handleLifelineCallClick = () => {
    logEvent(MetricsEvents.NeedHelpHotlineCalled);
  };

  handleLifelineChatClick = () => {
    logEvent(MetricsEvents.NeedHelpLifelineChatClicked);
  };

  handleHotlineUrlClick = () => {
    logEvent(MetricsEvents.NeedHelpWebsiteClicked);
  };

  sendMessage = (text: string) => {
    logEvent(MetricsEvents.NeedHelpOptionSelected, { option: text });

    this.props.sendChatMessage({ type: 'text', text });

    this.props.push('/');
  };
}

export default connect(
  (state: RootState) => ({
    getHelpConfig: state.profile.getHelpConfig,
    isFetchingGetHelpConfig: state.profile.isFetchingGetHelpConfig
  }),
  {
    sendChatMessage,
    push,
    fetchGetHelpConfig
  }
)(GetHelpDialog);
