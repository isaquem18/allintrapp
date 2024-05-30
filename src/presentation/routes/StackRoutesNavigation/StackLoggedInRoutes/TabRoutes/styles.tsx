import styled from 'styled-components/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeIconSVG from '@assets/icons/home.svg';
import SearchIconSVG from '@assets/icons/search.svg';
import WalletIconSVG from '@assets/icons/wallet.svg';
import ProfileIconSVG from '@assets/icons/profile.svg';
import AllintraLogoIconSVG from '@assets/logo/allintra-logo.svg';
import BellIconSVG from '@assets/icons/bell.svg';
import theme from '@styles/theme';
import WalletScreenTabHeader from '@screens/LoggedInGroupPages/WalletScreen/WalletScreenTabHeader';
import { View } from 'react-native';
import { SwitchTabHeaderComponent } from '@components/SwitchTabHeaderComponent';

interface ScreenOptionsProps {
  HomeScreen: BottomTabNavigationOptions;
  ExploreScreen: BottomTabNavigationOptions;
  WalletScreen: BottomTabNavigationOptions;
  ProfileScreen: BottomTabNavigationOptions;
}

const AllintraLogoHeaderIcon = styled(AllintraLogoIconSVG).attrs({
  width: 80,
  height: 21,
  backgroundColor: 'transparent',
  marginLeft: theme.values.paddingHorizontal,
})``;

export const BellIcon = styled(BellIconSVG).attrs({
  width: 24,
  height: 24,
  color: theme.colors.light,
})``;

export const HomeTabIcon = styled(HomeIconSVG).attrs({
  width: 19,
  height: 19,
  color: theme.colors.light,
})`
  box-shadow: 0px 0px 15px ${theme.colors.light};
`;

export const SearchTabIcon = styled(SearchIconSVG).attrs({
  width: 22,
  height: 22,
  color: theme.colors.light,
})``;

export const WalletTabIcon = styled(WalletIconSVG).attrs({
  width: 22,
  height: 22,
  color: theme.colors.light,
})``;

export const ProfileTabIcon = styled(ProfileIconSVG).attrs({
  width: 22,
  height: 22,
  color: theme.colors.light,
})``;

export const HeaderAvatar = styled.Image.attrs({})`
  width: 32px;
  height: 32px;
`;

function HeaderRightComponent() {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: theme.values.paddingHorizontal,
        flexDirection: 'row',
      }}
    >
      <SwitchTabHeaderComponent label="Enable" />
      <BellIcon />
      <HeaderAvatar source={require('@assets/images/avatar.png')} />
    </View>
  );
}

export const ScreenOptions: ScreenOptionsProps = {
  HomeScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <HeaderRightComponent />;
    },
    headerStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  ExploreScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <HeaderRightComponent />;
    },
    headerStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  WalletScreen: {
    title: '',
    header() {
      return <WalletScreenTabHeader />;
    },
    headerStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
  ProfileScreen: {
    title: '',
    headerLeft() {
      return <AllintraLogoHeaderIcon />;
    },
    headerRight() {
      return <HeaderRightComponent />;
    },
    headerStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
      shadowOpacity: 0,
    },
  },
};
