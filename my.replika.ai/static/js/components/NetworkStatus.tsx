import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { State } from '../types/states';
import { ZIndices } from '../types/enums';

type Props = {
  connectedToInternet: boolean;
};

const Ribbon = styled.div`
  position: fixed;
  top: 0;
  z-index: ${ZIndices.OfflineNotification};
  background-color: red;
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
`;

const NetworkStatus = (p: Props) => {
  return !p.connectedToInternet ? <Ribbon>Network unreachable</Ribbon> : null;
};

export default connect((state: State) => ({
  connectedToInternet: state.ui.connectedToInternet
}))(NetworkStatus);
