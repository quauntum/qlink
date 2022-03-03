import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {
  Wrapper as MenuWrapper,
  Button as MenuButton,
} from 'react-aria-menubutton';
import { ReactComponent as BackIcon } from '../icons/ArrowBack.svg';
import styledOmitProps from '../utils/styledOmitProps';
import SolidButton from './SolidButton';
import IconButton from './IconButton';
import CircleSpinner from '../components/CircleSpinner';

type Props = {
  title?: string;
  subtitle?: string;
  className: string | undefined;
  'data-testid': string;
  backTo?: string;
  children?: React.ReactNode;
  headerAction?: React.ReactNode;
  subheader?: React.ReactNode;
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  noContentPadding?: boolean;
};

const SidebarLayout = (
  {
    backTo,
    title,
    subtitle,
    'data-testid': dataTestId,
    className,
    children,
    headerAction,
    subheader,
    onScroll,
    noContentPadding = false,
  }: Props,
  ref: React.Ref<HTMLDivElement>
) => (
  <SidebarLayoutRoot className={className}>
    <LayoutSidebarHeader
      backTo={backTo}
      title={title}
      subtitle={subtitle}
      data-testid={dataTestId}
    >
      {headerAction}
    </LayoutSidebarHeader>
    {subheader}
    <Content onScroll={onScroll} ref={ref} noContentPadding={noContentPadding}>
      {children}
    </Content>
  </SidebarLayoutRoot>
);

export default React.forwardRef(SidebarLayout);

const SidebarLayoutRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styledOmitProps<{ noContentPadding: boolean }>('div', [
  'noContentPadding',
])`
  flex: 1 1 0; /* flex-basis=0 to fix height in Safari */
  overflow-y: auto;
  padding: ${(p) => (p.noContentPadding ? '0 0 30px' : '0 15px 30px')};
`;

const BackLink = styled(Link)``;

const Header = styledOmitProps<{ withSubtitle: boolean }>('div', [
  'withSubtitle',
])`
  flex: 0 0 auto;
  min-height: ${(p) => (p.withSubtitle ? 70 : 40)}px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: content-box;
`;

const StyledArrow = styled(BackIcon)`
  margin-top: 2px;
  &:hover {
    cursor: pointer;
  }

  color: ${(p) => p.theme.fgColor};
`;

const HeaderTitle = styled.div`
  flex: 1 0 auto;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.fgColor};
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

const Subtitle = styled.p`
  margin: 6px 0 0;
  font-size: 15px;
  text-align: center;
  color: ${(p) => p.theme.dimmedFgColor};
`;

type HeaderProps = {
  title?: string;
  subtitle?: string;
  backTo?: string;
  onClose?: () => void;
  'data-testid'?: string;
  className?: string;
  children?: React.ReactNode;
};

export const SidebarHeader = ({
  title,
  subtitle,
  backTo,
  onClose,
  'data-testid': dataTestId,
  className,
  children,
}: HeaderProps) => (
  <Header className={className} withSubtitle={!!subtitle}>
    {backTo && (
      <BackLink to={backTo} data-testid={`${dataTestId}-back-button`}>
        <StyledArrow />
      </BackLink>
    )}
    {onClose && (
      <IconButton onClick={onClose} data-testid={`${dataTestId}-back-button`}>
        <StyledArrow />
      </IconButton>
    )}
    <HeaderTitle>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderTitle>
    {children}
  </Header>
);

const LayoutSidebarHeader = styled(SidebarHeader)`
  margin: 0 15px;
`;

export const SidebarSection = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  padding-top: 20px;
  margin-top: 20px;
  color: ${(p) => p.theme.dimmedFgColor};
  border-top: 1px solid ${(p) => p.theme.borderColor};
  text-transform: uppercase;
`;

export const SidebarLabel = styled.label`
  display: block;
  color: ${(p) => p.theme.dimmedFgColor};
  font-size: 0.8em;
  padding: 20px 0 8px;
`;

export const SidebarButton = styled(SolidButton)`
  margin-top: 40px;
`;

export const SidebarLink = styledOmitProps<
  {
    red?: boolean | undefined;
    disabled?: boolean | undefined;
  },
  typeof Link
>(Link, ['red'])`
  text-decoration: none;
  background: none;
  border: 0;
  padding: 0;
  color: ${(p) =>
    p.disabled
      ? p.theme.dimmedFgColor
      : p.red
      ? p.theme.errorFgColor
      : 'inherit'};

  &:hover {
    cursor: ${(p) => (p.disabled ? 'initial' : 'pointer')};
  }
`;

export const SidebarLinkButton = SidebarLink.withComponent(
  ({ red, ...rest }) => <button {...rest} />
);

const SidebarSpinnerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.dimmedFgColor};

  min-height: 200px;

  & > svg {
    width: 100px;
  }
`;

export const SidebarSpinner = ({ className }: { className?: string }) => (
  <SidebarSpinnerRoot className={className}>
    <CircleSpinner />
  </SidebarSpinnerRoot>
);

export const SidebarMenuButton = styledOmitProps<{ active: boolean }>(
  MenuButton,
  ['active']
).attrs({ tag: 'button' })`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${(p) => (p.active ? p.theme.fgColor : p.theme.dimmedFgColor)};
  transition: color 0.2s ease-out;
  &:hover {
    color: ${(p) => p.theme.fgColor};
  }
`;

export const SidebarMenuWrapper = styled(MenuWrapper)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
