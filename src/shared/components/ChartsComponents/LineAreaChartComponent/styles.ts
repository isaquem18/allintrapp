import styled from 'styled-components/native';
import theme from '@styles/theme';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.dark}20;
  margin-top: 20px;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  padding: 20px 0px;
`;
