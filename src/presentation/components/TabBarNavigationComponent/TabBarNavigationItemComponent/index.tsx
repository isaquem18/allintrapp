import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import * as SafeArea from 'react-native-safe-area-context';
import {
  Easing,
  Extrapolation,
  interpolate,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
  RouteProp,
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

export function TabBarNavigationItemComponent({
  state,
  navigation,
  descriptors,
}: Props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const TitleButtonOpacity = useSharedValue(0);
  const focusedTab = state.index;
  const Icon = bottomTabRouteList[focusedTab]?.icon;

  const animateX = (index: number) => {
    'worklet';

    translateX.value = withTiming(index * TAB_WIDTH + index, { duration: 200 });
  };

  const animateYUp = () => {
    'worklet';

    translateY.value = -40;
    TitleButtonOpacity.value = 0;
  };

  const animateYDown = () => {
    'worklet';

    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.in(Easing.elastic(1.0)),
    });

    TitleButtonOpacity.value = withTiming(1, { duration: 300 });
  };

  const translateXStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const translateYStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(
      TitleButtonOpacity.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  const handleBottomTabPress = (isFocused: boolean, route: RouteProp<any>) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      animateYUp();
      navigation.navigate({ name: route.name, merge: true, params: {} });
    }
  };

  useEffect(() => {
    runOnUI(animateX)(focusedTab);
    runOnUI(animateYDown)();
  }, [focusedTab]);

  function PaddingBottomWrapper({ children }) {
    const insets = SafeArea.useSafeAreaInsets();
    return (
      <Styles.PaddingBottomWrapper
        paddingBottom={Math.max(insets.bottom, 20) + 30}
      >
        {children}
      </Styles.PaddingBottomWrapper>
    );
  }

  return (
    <>
      <PaddingBottomWrapper>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const TabIcon = bottomTabRouteList[index]?.icon;

          return (
            <Styles.BottomTabButton
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.testID}
              onPress={() => handleBottomTabPress(isFocused, route)}
            >
              <TabIcon />
            </Styles.BottomTabButton>
          );
        })}
      </PaddingBottomWrapper>
      <Styles.AnimatedView style={[translateXStyle]}>
        <Styles.AnimatedBottomView>
          <Icon />
          <Styles.AnimatedBottomText style={translateYStyle}>
            {bottomTabRouteList[focusedTab]?.label}
          </Styles.AnimatedBottomText>
        </Styles.AnimatedBottomView>
      </Styles.AnimatedView>
    </>
  );
}
