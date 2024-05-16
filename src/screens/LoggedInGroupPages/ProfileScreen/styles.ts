import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 60,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 3px;
`;
