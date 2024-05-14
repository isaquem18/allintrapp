import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import * as Styles from './styles';

export function TabBarNavigationItemComponent({
  onPress,
  isFocused,
  options,
  animationWidthlValue,
  label,
  route,
  index = 0,
}) {
  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={() => onPress(isFocused, index, route)}
      style={Styles.animationStyles.tabButton}
    >
      <Animated.View
        style={[
          Styles.animationStyles.innerView,
          {
            width: animationWidthlValue,
          },
        ]}
      >
        <Styles.ButtonTabContainer>
          <Styles.ButtonTab>
            {/* <AppIcon name={label} color={isFocused ? COLORS.main : COLORS.black} /> */}
            <Text
              numberOfLines={1}
              style={[
                Styles.animationStyles.iconText,
                { color: isFocused ? 'red' : 'orange' },
              ]}
            >
              {label}
            </Text>
          </Styles.ButtonTab>
        </Styles.ButtonTabContainer>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
