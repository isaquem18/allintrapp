import { useCallback } from 'react';

import { apiService } from '@services/fetchApi';
import { BNBUSDTEntity } from '@entities/ChartEntities/BNBUSDTEntity';
import { BTCUSDTEntity } from '@entities/ChartEntities/BTCUSDTEntity';
import { createWebSocketConnection } from '@utils/WebsocketConnection';

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

  const WEBSOCKET_BTCUSDTPrices = async ({
    interval = '1s',
  }: {
    interval?: string;
  }) => {
    const symbol = 'btcusdt';
    const ws = createWebSocketConnection(
      {
        url: `${process.env.BINANCE_WS_URL}/${symbol}@kline_${interval}`,
      },
      () => {
        // if (point && point?.k) {
        //   const newDataPoint = {
        //     shadowH: point,
        //     shadowL: point.Low,
        //     open: point.Open,
        //     close: point.Close,
        //     x: new Date(point?.OpenTime)?.getTime() || new Date().getTime(),
        //   };
        //   setLastPoint(newDataPoint);
      },
    );

    return {
      ws,
    };
  };

  return {
    fetchBNBUSDTPrices,
    fetchBTCUSDTPrices,
    WEBSOCKET_BTCUSDTPrices,
  };
}
