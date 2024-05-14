import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const SectionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
