import { useCallback } from 'react';

import { apiService } from '@services/fetchApi';
import { BNBUSDTEntity } from '@entities/ChartEntities/BNBUSDTEntity';

export function useChartData() {
  const fetchBNBUSDTPrices = useCallback(
    async ({ interval, limit }: BNBUSDTPricesProps) => {
      const config: ApiRequestProps = {
        url: process.env.WS_BINANCE_API_LINECHART_BTCUSDT || '',
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

  return {
    fetchBNBUSDTPrices,
  };
}
