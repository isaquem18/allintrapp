import { useCallback, useState } from 'react';
import { View } from 'react-native';

import { fetchData } from '@api/index';
import { CoinListComponent } from '@components/CoinListComponent';

import { useFocusEffect } from '@react-navigation/native';
import * as Styles from './styles';

export default function ExploreScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetchData(1);
      const newData = response?.data || [];

      if (newData.length > 0) {
        setData(newData);
      }
    } catch (e) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const keyExtractor = useCallback((item, index) => `${item?.id}-${index}`, []);

  const renderItem = useCallback((element) => {
    return <CoinListComponent element={element.item} />;
  }, []);

  return (
    <Styles.ScreenContainer>
      <Styles.FlatListComponent
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{ margin: 10 }} />}
      />
    </Styles.ScreenContainer>
  );
}
