import styled from 'styled-components/native';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import theme from '@styles/theme';
import StrategiesIconSVG from '@assets/icons/strategies.svg';
import FeedIconSVG from '@assets/icons/feed.svg';
import { RFValue } from 'react-native-responsive-fontsize';

interface ScreenOptionsProps {
  Navigator: MaterialTopTabNavigationOptions;
  HomeScreenFeedTab: MaterialTopTabNavigationOptions;
  HomeScreenStrategiesTab: MaterialTopTabNavigationOptions;
}

interface TopTabNavigationColor {
  iconColor: string;
}

const StrategiesTabIcon = styled(
  StrategiesIconSVG,
).attrs<TopTabNavigationColor>(({ iconColor = 'f00' }) => ({
  width: 16,
  height: 16,
  color: iconColor,
}))``;

const FeedTabIcon = styled(FeedIconSVG).attrs<TopTabNavigationColor>(
  ({ iconColor = 'f00' }) => ({
    width: 16,
    height: 16,
    color: iconColor,
  }),
)``;

export const ScreenOptions: ScreenOptionsProps = {
  Navigator: {
    tabBarGap: 0,
    tabBarStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
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
    },
    tabBarContentContainerStyle: {
      marginTop: 4,
      marginBottom: -3,
    },
    tabBarActiveTintColor: theme.colors.mainPink,
    tabBarInactiveTintColor: theme.colors.gray5,
  },
  HomeScreenFeedTab: {
    title: 'Feed',
    tabBarIcon(props) {
      return <FeedTabIcon iconColor={props.color} />;
    },
  },
  HomeScreenStrategiesTab: {
    title: 'Strategies',
    tabBarIcon(props) {
      return <StrategiesTabIcon iconColor={props.color} />;
    },
  },
};