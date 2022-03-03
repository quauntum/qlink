import * as React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import FocusTrap from 'focus-trap-react';
import { RootState } from '../types/states';
import {
  getSingleWindowManager,
  SingleWindowManager
} from '../utils/SingleWindowManager';
import { ZIndices } from '../types/enums';

type Props = {
  isActiveWindow: boolean;
};

const SingleWindowAlertRoot = styled.div`
  position: fixed;
  z-index: ${ZIndices.SingleWindowAlert};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.chatBgColor};
    opacity: 0.8;
  }
`;

const SingleWindowAlertBox = styled.div`
  z-index: 2;
  width: 340px;
  height: 180px;
  background: ${p => p.theme.chatBgColor};
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 20px 0 ${p => p.theme.shadowColor};
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
`;

const SingleWindowAlertText = styled.div`
  flex: 1 0 auto;
  font-size: 17px;
  line-height: 1.41;
  letter-spacing: -0.2px;
  color: ${p => p.theme.fgColor};
`;

const SingleWindowAlertButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  color: ${p => p.theme.primaryColor};
  background-color: ${p => p.theme.chatBgColor};
  width: 120px;
  height: 40px;
  border: 0;
  cursor: pointer;
`;

const UseButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  color: ${p => p.theme.chatBgColor};
  background-color: ${p => p.theme.primaryColor};
  width: 120px;
  height: 40px;
  border: 0;
  cursor: pointer;
`;

class SingleWindowAlert extends React.PureComponent<Props> {
  singleWindowManager: SingleWindowManager;

  constructor(props) {
    super(props);
    this.singleWindowManager = getSingleWindowManager(props.dispatch);
  }

  render() {
    return this.props.isActiveWindow ? null : (
      <SingleWindowAlertRoot
        role="dialog"
        aria-labelledby="single-window-popup-text"
      >
        <FocusTrap>
          <SingleWindowAlertBox>
            <SingleWindowAlertText id="single-window-popup-text">
              Replika is open in another window. Click “Use here” to use Replika
              in this window.
            </SingleWindowAlertText>
            <SingleWindowAlertButtons>
              <CloseButton
                onClick={() =>
                  window.open('https://replika.ai', '_self')!.close()
                }
              >
                Close
              </CloseButton>
              <UseButton onClick={() => this.singleWindowManager.setActive()}>
                Use here
              </UseButton>
            </SingleWindowAlertButtons>
          </SingleWindowAlertBox>
        </FocusTrap>
      </SingleWindowAlertRoot>
    );
  }
}

export default connect((state: RootState) => ({
  isActiveWindow: state.ui.isActiveWindow
}))(SingleWindowAlert);
