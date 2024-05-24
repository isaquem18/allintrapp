import styled from 'styled-components/native';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

import BrokersIconSVG from '@assets/icons/brokers.svg';
import CryptoIconSVG from '@assets/icons/cripto.svg';

import theme from '@styles/theme';

interface ScreenOptionsProps {
  Navigator: MaterialTopTabNavigationOptions;
  WalletScreenCryptoassetsTab: MaterialTopTabNavigationOptions;
  WalletScreenBrokerTab: MaterialTopTabNavigationOptions;
}

interface TopTabNavigationColor {
  iconColor: string;
}

const BrokersTabIcon = styled(BrokersIconSVG).attrs<TopTabNavigationColor>(
  ({ iconColor = 'f00' }) => ({
    width: 18,
    height: 18,
    color: iconColor,
  }),
)``;

const CryptoTabIcon = styled(CryptoIconSVG).attrs<TopTabNavigationColor>(
  ({ iconColor = 'f00' }) => ({
    width: 18,
    height: 18,
    color: iconColor,
  }),
)``;

export const ScreenOptions: ScreenOptionsProps = {
  Navigator: {
    tabBarGap: 0,
    tabBarStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
      borderBottomWidth: 1,
      borderBottomColor: `${theme.colors.gray500}50`,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
    },
    tabBarLabelStyle: {
      fontFamily: theme.fonts.poppins600,
      fontSize: RFValue(10.1),
      marginTop: -4,
      textTransform: 'none',
    },
    tabBarIndicatorStyle: {
      backgroundColor: theme.colors.mainPink,
      height: 2,
      position: 'absolute',
      bottom: -1,
    },
    tabBarContentContainerStyle: {
      marginTop: 4,
      marginBottom: -3,
    },
    tabBarActiveTintColor: theme.colors.mainPink,
    tabBarInactiveTintColor: theme.colors.gray500,
  },
  WalletScreenCryptoassetsTab: {
    title: 'Criptoativos',
    tabBarIcon(props) {
      return <CryptoTabIcon iconColor={props.color} />;
    },
  },
  WalletScreenBrokerTab: {
    title: 'Corretoras',
    tabBarIcon(props) {
      return <BrokersTabIcon iconColor={props.color} />;
    },
  },
};
