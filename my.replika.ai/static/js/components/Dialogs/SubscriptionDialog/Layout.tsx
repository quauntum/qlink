import * as React from 'react';
import styled from 'styled-components/macro';
import { Dialog, DialogCloseButton } from '../../DialogLayout';
import { MAIN_PAGE_URL_BASE } from '../../../utils/constants';
import { dialogMobileMedia } from '../../../utils/mobileMedia';
import imageSourceSet from '../../../utils/imageSourceSet';

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  'data-testid': string;
};

const Layout = ({
  onClose,
  title,
  children,
  'data-testid': dataTestId,
}: Props) => {
  return (
    <LayoutRoot data-testid={dataTestId}>
      <DialogBody>
        <CloseButton onClose={onClose} />
        <Left>
          <Logo>
            Replika <Pro>Pro</Pro>
          </Logo>
          <Title>{title}</Title>
          <ReplikasImg
            {...imageSourceSet(`${MAIN_PAGE_URL_BASE}/replikas.jpg`)}
            alt=""
          />
        </Left>
        {children}
      </DialogBody>
    </LayoutRoot>
  );
};

export default Layout;

const LayoutRoot = styled(Dialog)`
  max-height: 100vh;

  ${dialogMobileMedia`
    && {
      max-height: initial;
      width: 100%;
      margin: 0;
    }
  `}
`;

const ReplikasImg = styled.img`
  width: 100%;
`;

const CloseButton = styled(DialogCloseButton)`
  z-index: 2;
  ${dialogMobileMedia`
    color: #FFF;
  `}
`;

const DialogBody = styled.div`
  position: relative;
  display: flex;
  overflow-y: scroll;
  align-items: stretch;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  ${dialogMobileMedia`
    flex-direction: column;
    height: 100vh;
    overflow: hidden scroll;
    padding-bottom: 20px;
  `}
`;

const Logo = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;

  ${dialogMobileMedia`
    margin-top: 30px;
  `}
`;

const Pro = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  line-height: 21px;
  color: #000;
  background-color: #fff;
  padding: 3px 5px;
  border-radius: 2px;
  vertical-align: text-bottom;
`;

const Left = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  color: #fff;

  ${dialogMobileMedia`
    width: 100%;
    flex: 0 0 auto;
  `}
`;

const Title = styled.h2`
  width: 260px;
  margin-top: 30px;
  text-align: center;
  font-size: 24px;
  line-height: 32px;

  ${dialogMobileMedia`
    margin-top: 25px;
  `}
`;
