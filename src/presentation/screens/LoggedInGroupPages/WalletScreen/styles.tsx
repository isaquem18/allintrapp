import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import BrokersIconSVG from '@assets/icons/brokers.svg';
import CryptoIconSVG from '@assets/icons/cripto.svg';

import theme from '@styles/theme';

const { width } = Dimensions.get('window');

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
      borderBottomColor: `${theme.colors.gray500}50`,
      borderBottomWidth: 1,
    },
    tabBarContentContainerStyle: {
      marginTop: 4,
      marginBottom: -3,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
      width: width / 2 - theme.values.paddingHorizontal,
    },
    tabBarIndicatorStyle: {
      backgroundColor: theme.colors.mainPink,
      height: 2,
      position: 'absolute',
      bottom: -1.5,
      marginLeft: theme.values.paddingHorizontal,
    },
    tabBarLabelStyle: {
      fontFamily: theme.fonts.poppins600,
      fontSize: RFValue(10.1),
      marginTop: -4,
      textTransform: 'none',
    },
    tabBarIconStyle: {
      marginLeft: 34,
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
