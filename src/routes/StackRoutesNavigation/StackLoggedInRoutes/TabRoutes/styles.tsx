import styled from 'styled-components/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeIconSVG from '@assets/icons/home.svg';
import SearchIconSVG from '@assets/icons/search.svg';
import WalletIconSVG from '@assets/icons/wallet.svg';
import ProfileIconSVG from '@assets/icons/profile.svg';
import AllintraLogoIconSVG from '@assets/logo/allintra-logo.svg';
import Theme from '@styles/theme';

interface ScreenOptionsProps {
  home: BottomTabNavigationOptions;
  tab2: BottomTabNavigationOptions;
  tab3: BottomTabNavigationOptions;
  tab4: BottomTabNavigationOptions;
}

const AllintraLogoHeaderIcon = styled(AllintraLogoIconSVG).attrs(
  ({ theme }) => ({
    width: 100,
    height: 60,
    backgroundColor: 'yellow',
    marginLeft: theme.values.paddingHorizontal,
  }),
)``;

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
  home: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <Text>BBBB</Text>;
    },
    headerStyle: {
      backgroundColor: Theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  tab2: {
    title: 'tab2',
    headerLeft() {
      return <Text>AAAA</Text>;
    },
    headerRight() {
      return <Text>BBBB</Text>;
    },
  },
  tab3: {},
  tab4: {},
};
