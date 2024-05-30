import { Rect } from 'react-content-loader/native';
import * as Styles from './styles';

export function SkeletonLoader() {
  return (
    <Styles.SkeletonContainer>
      <Styles.ContentLoaderLib>
        {/* Adicione os elementos do loader conforme necessário */}
        <Rect x="0" y="0" rx="20" ry="5" width="100%" height="200" />
      </Styles.ContentLoaderLib>
    </Styles.SkeletonContainer>
  );
}
