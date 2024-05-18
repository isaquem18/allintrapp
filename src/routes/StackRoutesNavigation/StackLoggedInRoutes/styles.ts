import theme from '@styles/theme';
import styled from 'styled-components/native';

export const TabOptions = {
  headerShown: false,
};

export const Container = styled.ScrollView`
  flex: 1;
`;

export const CriptoDetailsOptions = {
  headerShown: true,
  headerBackTitle: 'Voltar',
  title: '',
  headerStyle: {
    backgroundColor: theme.colors.secondaryBackgroundColor,
  },
  backTitleStyle: {
    color: '#fff',
  },
};
