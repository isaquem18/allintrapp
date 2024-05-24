import { FollowingUserFeedPost } from '@components/FollowingUserFeedPost';

import * as Styles from './styles';

export default function HomeScreenFeedTab() {
  return (
    <Styles.Container>
      <Styles.PostList
        data={[1]}
        renderItem={() => <FollowingUserFeedPost item={1} />}
      />
    </Styles.Container>
  );
}
