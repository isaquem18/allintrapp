import styled from 'styled-components/native';
import theme from '@styles/theme';
import AllintraLogoIconSVG from '@assets/logo/allintra-logo.svg';
import MenuIconSVG from '@assets/icons/menu.svg';

export const TabBarContainer = styled.View`
  width: ${theme.values.sidebarWidth}px;
  height: 100%;
  position: absolute;
  left: 0px;
  overflow: hidden;
  flex-direction: column;
`;

export const TabBarBlurView = styled.View`
  flex: 1;
  width: ${theme.values.sidebarWidth}px;
  flex-direction: column;
`;

export const AllintraLogoHeaderIcon = styled(AllintraLogoIconSVG).attrs({
  width: 100,
  height: 21,
  backgroundColor: 'transparent',
})<{ marginTop: number }>`
  margin-top: ${({ marginTop }) => marginTop + 30}px;
  margin-bottom: 50px;
  align-self: center;
`;

export const SidebarFooter = styled.View`
  width: ${theme.values.sidebarWidth}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export const MenuSidebarIcon = styled(MenuIconSVG).attrs({
  width: 40,
  height: 40,
  backgroundColor: 'transparent',
  color: theme.colors.light,
})<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => Number(marginBottom || 0) + 40}px;
  margin-top: 20px;
`;
