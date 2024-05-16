import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as SafeArea from 'react-native-safe-area-context';

import { TabBarNavigationItemComponent } from './TabBarNavigationItemComponent';

import * as Styles from './styles';

function PaddingBottomWrapper({ children }) {
  const insets = SafeArea.useSafeAreaInsets();
  return (
    <Styles.PaddingBottomWrapper
      paddingBottom={Math.max(insets.bottom, 20) + 20}
    >
      {children}
    </Styles.PaddingBottomWrapper>
  );
}

export function TabBarNavigationComponent({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <Styles.TabBarContainer>
      <Styles.TabBarBlur>
        <PaddingBottomWrapper>
          <TabBarNavigationItemComponent
            state={state}
            navigation={navigation}
            descriptors={descriptors}
          />
        </PaddingBottomWrapper>
      </Styles.TabBarBlur>
    </Styles.TabBarContainer>
  );
}
