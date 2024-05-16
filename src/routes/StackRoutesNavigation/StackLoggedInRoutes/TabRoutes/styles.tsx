import styled from 'styled-components/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeIconSVG from '@assets/icons/home.svg';
import SearchIconSVG from '@assets/icons/search.svg';
import WalletIconSVG from '@assets/icons/wallet.svg';
import ProfileIconSVG from '@assets/icons/profile.svg';
import AllintraLogoIconSVG from '@assets/logo/allintra-logo.svg';
import BellIconSVG from '@assets/icons/bell.svg';
import Theme from '@styles/theme';

interface ScreenOptionsProps {
  HomeScreen: BottomTabNavigationOptions;
  ExploreScreen: BottomTabNavigationOptions;
  WalletScreen: BottomTabNavigationOptions;
  ProfileScreen: BottomTabNavigationOptions;
}

const AllintraLogoHeaderIcon = styled(AllintraLogoIconSVG).attrs(
  ({ theme }) => ({
    width: 100,
    height: 60,
    backgroundColor: 'transparent',
    marginLeft: theme.values.paddingHorizontal,
  }),
)``;

export const BellIcon = styled(BellIconSVG).attrs(({ theme }) => ({
  width: 24,
  height: 24,
  color: theme.colors.light,
  marginRight: theme.values.paddingHorizontal,
}))``;

export const HomeTabIcon = styled(HomeIconSVG).attrs(({ theme }) => ({
  width: 18,
  height: 18,
  color: theme.colors.light,
}))``;

export const SearchTabIcon = styled(SearchIconSVG).attrs(({ theme }) => ({
  width: 20,
  height: 20,
  color: theme.colors.light,
}))``;

export const WalletTabIcon = styled(WalletIconSVG).attrs(({ theme }) => ({
  width: 20,
  height: 20,
  color: theme.colors.light,
}))``;

export const ProfileTabIcon = styled(ProfileIconSVG).attrs(({ theme }) => ({
  width: 20,
  height: 20,
  color: theme.colors.light,
}))``;

export const ScreenOptions: ScreenOptionsProps = {
  HomeScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <BellIcon />;
    },
    headerStyle: {
      backgroundColor: Theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  ExploreScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <BellIcon />;
    },
    headerStyle: {
      backgroundColor: Theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  WalletScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <BellIcon />;
    },
    headerStyle: {
      backgroundColor: Theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  ProfileScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <BellIcon />;
    },
    headerStyle: {
      backgroundColor: Theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
};
