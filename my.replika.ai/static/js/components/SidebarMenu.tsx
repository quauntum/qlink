import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MenuItem, Menu } from 'react-aria-menubutton';
import { SidebarHeader } from './SidebarLayout';
import { dialogMobileMedia } from '../utils/mobileMedia';
import { DialogMobile } from './responsive';
import { RootState } from '../types/states';

type MenuItemType = {
  name: string;
  label: string;
  component: JSX.Element | null;
  icon?: JSX.Element;
  bordered?: boolean;
};

type Props = {
  className?: string;
  onSelect?: (value: string) => void;
  onClose: () => void;
  standalone?: boolean;
  'data-testid': string;
  backTo: string;
  items: MenuItemType[];
  email: string | undefined;
};

const SidebarMenu = (props: Props) => {
  const { className, items, 'data-testid': dataTestId, onClose, email } = props;

  return (
    <StyledMenu tag="ul" className={className}>
      <DialogMobile>
        <StyledSidebarHeader title="Settings" onClose={onClose} />
      </DialogMobile>
      {items.map((item) => {
        return item.component ? (
          <React.Fragment key={item.name}>
            <StyledMenuItem
              tag="li"
              value={item.name}
              aria-live="assertive"
              data-testid={`${dataTestId}-${item.name}`}
              aria-label={item.label}
            >
              {item.icon && <Icon>{item.icon}</Icon>}
              {item.component}
            </StyledMenuItem>
            {item.bordered && <Divider />}
          </React.Fragment>
        ) : null;
      })}
      {email && <AuthInfo>Logged in as: {email}</AuthInfo>}
      <Copy>© 2019 Luka, Inc. All rights reserved.</Copy>
    </StyledMenu>
  );
};

export default connect((state: RootState) => {
  const { userProfile } = state.profile.persist;
  return {
    email: userProfile?.email_settings?.email,
  };
})(SidebarMenu);

const Copy = styled.div`
  color: ${(p) => p.theme.dimmedFgColor};
  font-size: 13px;
  padding: 10px 20px 0;
`;

const AuthInfo = styled.div`
  color: ${(p) => p.theme.dimmedFgColor};
  font-size: 13px;
  padding: 40px 20px 0;
`;

const StyledSidebarHeader = styled(SidebarHeader)`
  padding: 0 20px;
  min-height: 70px;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  margin: 0;
  padding: 0px 0 23px;
  width: 280px;
  border-radius: 8px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: ${(p) => p.theme.bgColor};
  box-shadow: 0 3px 10px 0 ${(p) => p.theme.shadowColor};
  padding-inline-start: 0px;
  top: 21px;
  left: 16px;

  ${dialogMobileMedia`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow-y: auto;
    border-radius: 0px;
  `}
`;

const Icon = styled.div`
  padding: 4px 20px 0 0;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  height: 1px;
  margin: 7px 0 5px;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 16px;
  height: 50px;
  color: ${(p) => p.theme.fgColor};
  padding: 0 20px;

  display: flex;
  align-items: center;

  &:last-child {
    border-radius: 0 0 4px 4px;
    border-bottom: none;
  }
`;

export const SidebarMenuLinkText = styled.div`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const SidebarMenuLink = styled(Link)`
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    cursor: pointer;
  }
`;
