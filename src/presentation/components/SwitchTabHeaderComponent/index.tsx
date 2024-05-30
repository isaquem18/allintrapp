import { useState } from 'react';

import { TouchableOpacity, Animated } from 'react-native';

import * as Styles from './styles';

export function SwitchTabHeaderComponent({ label }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const animatedValue = useState(new Animated.Value(isEnabled ? 50 : 0))[0];
  const animatedXValue = useState(new Animated.Value(isEnabled ? 8 : 40))[0];

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);

    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 50,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedXValue, {
      toValue: isEnabled ? 40 : 8,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Styles.Container>
      <TouchableOpacity onPress={toggleSwitch}>
        <Styles.SwitchContainer isEnabled={isEnabled}>
          <Styles.SwitchKnob
            style={{
              transform: [{ translateX: animatedValue }],
            }}
          >
            <Styles.SettingsIcon />
          </Styles.SwitchKnob>
          {label && (
            <Styles.Label
              style={{
                transform: [{ translateX: animatedXValue }],
              }}
            >
              Label
            </Styles.Label>
          )}
        </Styles.SwitchContainer>
      </TouchableOpacity>
    </Styles.Container>
  );
}
