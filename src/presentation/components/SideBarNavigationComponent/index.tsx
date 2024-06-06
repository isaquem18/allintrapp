import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import * as SafeArea from 'react-native-safe-area-context';
import { SideBarNavigationItemComponent } from './SideBarNavigationItemComponent';

import * as Styles from './styles';

export function SideBarNavigationComponent({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  const insets = SafeArea.useSafeAreaInsets();

  return (
    <Styles.TabBarContainer>
      <Styles.AllintraLogoHeaderIcon marginTop={insets.top} />
      <Styles.TabBarBlurView>
        <SideBarNavigationItemComponent
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      </Styles.TabBarBlurView>
      <Styles.SidebarFooter>
        <Styles.Avatar source={require('@assets/images/avatar.png')} />
        <Styles.MenuSidebarIcon marginBottom={insets.bottom} />
      </Styles.SidebarFooter>
    </Styles.TabBarContainer>
  );
}
