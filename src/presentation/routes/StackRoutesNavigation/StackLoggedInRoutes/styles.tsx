import theme from '@styles/theme';
import styled from 'styled-components/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import BackButtonIconSVG from '@assets/icons/back.svg';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const TabOptions = {
  headerShown: false,
};

export const Container = styled.ScrollView`
  flex: 1;
`;

const BackButtonIcon = styled(BackButtonIconSVG).attrs({
  width: 24,
  height: 24,
  color: theme.colors.light,
  marginRight: theme.values.paddingHorizontal,
})``;

function HeaderLeftComponent() {
  const navigation = useNavigation();

  return (
    <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
      <BackButtonIcon stroke={theme.colors.mainPink} />
    </Pressable>
  );
}

export const CriptoDetailsOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: '',
  headerStyle: {
    backgroundColor: theme.colors.secondaryBackgroundColor,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeftLabelVisible: false,
  headerLeft() {
    return <HeaderLeftComponent />;
  },
  headerLeftContainerStyle: {
    paddingLeft: 6,
  },
};
