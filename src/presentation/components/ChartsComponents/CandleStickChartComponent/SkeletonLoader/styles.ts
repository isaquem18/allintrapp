import styled from 'styled-components/native';
import ContentLoader from 'react-content-loader/native';
import theme from '@styles/theme';

export const SkeletonContainer = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
`;

export const ContentLoaderLib = styled(ContentLoader).attrs({
  ...theme.skeletonStyles,
})`
  width: 100%;
  height: 200px;
`;
