import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';

import { bottomTabRouteList } from '@routes/StackRoutesNavigation/StackLoggedInRoutes/TabRoutes/bottomTabRouteList';
import * as Styles from './styles';

type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const { width } = Dimensions.get('window');

const TAB_WIDTH = (width - 40) / 4;

const styles = StyleSheet.create(Styles.AnimatedButtonStyle);

export function TabBarNavigationItemComponent({
  state,
  navigation,
  descriptors,
}: Props) {
  const translateX = useSharedValue(0);
  const focusedTab = state.index;

  const handleAnimate = (index: number) => {
    'worklet';

    translateX.value = withTiming(index * TAB_WIDTH + index, {
      duration: 200,
    });
  };
  useEffect(() => {
    runOnUI(handleAnimate)(focusedTab);
  }, [focusedTab]);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const Icon = bottomTabRouteList[focusedTab]?.icon;

  return (
    <>
      <Animated.View style={[styles.container, rnStyle]}>
        <Styles.AnimatedBottomView>
          <Icon />
          <Styles.AnimatedBottomText>
            {bottomTabRouteList[focusedTab]?.label}
          </Styles.AnimatedBottomText>
        </Styles.AnimatedBottomView>
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const AllIconTabs = bottomTabRouteList[index]?.icon;
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.testID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            <AllIconTabs />
          </TouchableOpacity>
        );
      })}
    </>
  );
}
