import styled from 'styled-components/native';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import theme from '@styles/theme';
import StrategiesIconSVG from '@assets/icons/strategies.svg';
import FeedIconSVG from '@assets/icons/feed.svg';

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
  width: 18,
  height: 18,
  color: iconColor,
}))``;

const FeedTabIcon = styled(FeedIconSVG).attrs<TopTabNavigationColor>(
  ({ iconColor = 'f00' }) => ({
    width: 18,
    height: 18,
    color: iconColor,
  }),
)``;

export const ScreenOptions: ScreenOptionsProps = {
  Navigator: {
    tabBarStyle: {
      backgroundColor: theme.colors.mainBackgroundColor,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
    },
    tabBarLabelStyle: {
      fontFamily: theme.fonts.poppins600,
      marginTop: -2,
    },
    tabBarIndicatorStyle: {
      backgroundColor: theme.colors.mainPink,
    },
    tabBarContentContainerStyle: {},
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
