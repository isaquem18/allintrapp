import { FollowingUserFeedPost } from '@components/FollowingUserFeedPost';

import * as Styles from './styles';

export default function HomeScreenFeedTab() {
  return (
    <Styles.Container>
      <Styles.PostList
        data={[1]}
        renderItem={({ item }: any) => <FollowingUserFeedPost item={item} />}
      />
    </Styles.Container>
  );
}
