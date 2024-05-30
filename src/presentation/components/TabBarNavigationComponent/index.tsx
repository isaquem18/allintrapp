import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabBarNavigationItemComponent } from './TabBarNavigationItemComponent';

import * as Styles from './styles';

export function TabBarNavigationComponent({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <Styles.TabBarContainer>
      <Styles.TabBarBlur />
      <Styles.TabBarBlurView>
        <TabBarNavigationItemComponent
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      </Styles.TabBarBlurView>
    </Styles.TabBarContainer>
  );
}
