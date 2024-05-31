import { useCallback } from 'react';

import { apiService } from '@services/fetchApi';
import { BNBUSDTEntity } from '@entities/ChartEntities/BNBUSDTEntity';
import { BTCUSDTEntity } from '@entities/ChartEntities/BTCUSDTEntity';

export function useChartData() {
  const fetchBNBUSDTPrices = useCallback(
    async ({ interval, limit }: BNBUSDTPricesProps) => {
      const config: ApiRequestProps = {
        url: `${process.env.CHARTS_BINANCE_API}/klines`,
        method: 'GET',
        params: { interval, limit, symbol: 'BNBUSDT' },
      };

      const response = await apiService<any>(config);

      if (response.success) {
        return response.data.map((item) => BNBUSDTEntity(item));
      }

      return response.data;
    },
    [],
  );

  const fetchBNBUSDTCandleStickPrices = useCallback(
    async ({ interval, limit }: BNBUSDTPricesProps) => {
      const config: ApiRequestProps = {
        url: `${process.env.CHARTS_BINANCE_API}/klines`,
        method: 'GET',
        params: {
          interval,
          limit,
          symbol: 'BNBUSDT',
          endTime: Date.now(),
          startTime: Date.now() - 1 * 24 * 60 * 1000,
        },
      };

      const response = await apiService<any>(config);

      if (response.success) {
        const formattedResponse = response.data.map((item: any) => ({
          timestamp: item[0],
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
        }));

        return formattedResponse;
      }

      return response.data;
    },
    [],
  );

  const fetchBTCUSDTPrices = useCallback(
    async ({ interval, limit }: BTCUSDTPricesProps) => {
      const config: ApiRequestProps = {
        url: `${process.env.CHARTS_BINANCE_API}/klines`,
        method: 'GET',
        params: { interval, limit, symbol: 'BTCUSDT' },
      };

      const response = await apiService<any>(config);

      if (response.success && Array.isArray(response.data)) {
        return response.data.map((item) => BTCUSDTEntity(item));
      }

      return response;
    },
    [],
  );

  return {
    fetchBNBUSDTPrices,
    fetchBTCUSDTPrices,
    fetchBNBUSDTCandleStickPrices,
  };
}
