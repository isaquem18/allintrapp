import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

import * as Styles from './styles';
import { TabBarNavigationItemComponent } from './TabBarNavigationItemComponent/index';

const { width } = Dimensions.get('screen');
const SelectedTabWidth = width * 0.4;
const NotSelectedTabWidth = width * 0.3;

export function TabBarNavigationComponent({ state, descriptors, navigation }) {
  const animationWidthlValueHome = useRef(
    new Animated.Value(SelectedTabWidth),
  ).current;
  const animationWidthlValueWallet = useRef(
    new Animated.Value(NotSelectedTabWidth),
  ).current;
  const animationWidthlValueProfile = useRef(
    new Animated.Value(NotSelectedTabWidth),
  ).current;

  const onPress = (isFocused: boolean, index: number, route: any) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    Animated.spring(animationWidthlValueHome, {
      toValue: index === 0 ? SelectedTabWidth : NotSelectedTabWidth,
      useNativeDriver: false,
    }).start();
    Animated.spring(animationWidthlValueWallet, {
      toValue: index === 1 ? SelectedTabWidth : NotSelectedTabWidth,
      useNativeDriver: false,
    }).start();
    Animated.spring(animationWidthlValueProfile, {
      toValue: index === 2 ? SelectedTabWidth : NotSelectedTabWidth,
      useNativeDriver: false,
    }).start();

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <Styles.TabBarContainer>
      {state.routes.map((route, index) => (
        <TabBarNavigationItemComponent
          index={index}
          isFocused={state.index === index}
          onPress={onPress}
          options={descriptors?.[route?.key]}
          label={descriptors?.[route?.key]?.options?.tabBarLabel || route?.name}
          route={route}
          animationWidthlValue={(() => {
            switch (index) {
              case 0:
                return animationWidthlValueHome;
              case 1:
                return animationWidthlValueWallet;
              default:
                return animationWidthlValueProfile;
            }
          })()}
        />
      ))}
    </Styles.TabBarContainer>
  );
}
