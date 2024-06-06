import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import theme from '@styles/theme';
import StrategiesIconSVG from '@assets/icons/strategies.svg';
import FeedIconSVG from '@assets/icons/feed.svg';
import { isSmartphone } from '@utils/Storage';

const { width } = Dimensions.get('window');

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
).attrs<TopTabNavigationColor>(({ iconColor = '#fff' }) => ({
  width: 16,
  height: 16,
  color: iconColor,
}))``;

const FeedTabIcon = styled(FeedIconSVG).attrs<TopTabNavigationColor>(
  ({ iconColor = '#fff' }) => ({
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
      borderBottomColor: `${theme.colors.gray500}50`,
      borderBottomWidth: 1,
    },
    tabBarContentContainerStyle: {
      marginTop: 6,
      marginBottom: -7,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
      width: (() => {
        const fullTabWidth = width / 2 - theme.values.paddingHorizontal;
        const tabletWidth =
          (width -
            theme.values.sidebarWidth -
            theme.values.paddingHorizontal * 2) /
          2;

        return isSmartphone() ? fullTabWidth : tabletWidth;
      })(),
    },
    tabBarIndicatorStyle: {
      backgroundColor: theme.colors.mainPink,
      height: 1,
      position: 'absolute',
      bottom: -1,
      marginLeft: theme.values.paddingHorizontal,
    },
    tabBarLabelStyle: {
      fontFamily: theme.fonts.poppins600,
      fontSize: RFValue(10.4),
      marginTop: -4,
      textTransform: 'none',
    },
    tabBarIconStyle: {
      marginLeft: 34,
    },
    tabBarActiveTintColor: theme.colors.mainPink,
    tabBarInactiveTintColor: theme.colors.gray500,
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
