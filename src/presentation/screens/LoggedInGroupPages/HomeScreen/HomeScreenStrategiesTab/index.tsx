import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { HomeTabStrategiesPost } from '@components/HomeTabStrategiesPost';

import * as Styles from './styles';

type Item = {
  id: number;
  currentPrice: string;
  positive: boolean;
};

const NUM_COLUMNS = 2;

export default function HomeScreenStrategiesTab() {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function getRandomPrice(): string {
    const randomPrice = (Math.random() * 200 + 50).toFixed(2); // Gera um preço entre 50 e 250
    return `$ ${randomPrice}`;
  }

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    // Simula uma requisição de API
    setTimeout(() => {
      const newData: Item[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        currentPrice: getRandomPrice(),
        positive: i % 2 === 0,
      }));
      setData((prevData: any) => [...prevData, ...newData]);
      setLoading(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <HomeTabStrategiesPost
      element={{
        id: item.id,
        currentPrice: '$ 100.00',
        positive: item.positive,
      }}
    />
  );

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={Styles.StyleSheet.footer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Styles.FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={NUM_COLUMNS}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      columnWrapperStyle={Styles.StyleSheet.row}
    />
  );
}
