import theme from '@styles/theme';
import styled from 'styled-components/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import BackButtonIconSVG from '@assets/icons/back.svg';

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
    return <BackButtonIcon stroke={theme.colors.mainPink} />;
  },
  headerLeftContainerStyle: {
    paddingLeft: 6,
  },
};
