import { useCallback } from 'react';
import axios from 'axios';

export const usePricesStream = () => {
  const fetchHistoricalDataBTCUSDTPriceChart = useCallback(
    async ({ dispatch }: any) => {
      try {
        const response = await axios.get(
          'https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=100',
        );

        if (response?.data) {
          dispatch({
            type: 'UPDATE_BTCUSDT_PRICES',
            payload: response?.data,
          });
        }
      } catch (error) {
        dispatch({ type: 'FETCH_BTC_PRICES_FAILURE' });
      }
    },
    [],
  );

  return {
    fetchHistoricalDataBTCUSDTPriceChart,
  };
};
