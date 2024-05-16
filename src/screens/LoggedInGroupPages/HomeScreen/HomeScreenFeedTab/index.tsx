import { FollowingUserFeedPost } from '@components/FollowingUserFeedPost';

import * as Styles from './styles';

export default function HomeScreenFeedTab() {
  return (
    <Styles.Container>
      <Styles.PostList
        data={Array(20).fill('a')}
        renderItem={() => <FollowingUserFeedPost />}
      />
    </Styles.Container>
  );
}
