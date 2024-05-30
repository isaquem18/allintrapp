interface BNBUSDTPricesProps {
  interval: string;
  limit: number;
}
interface BNBUSDTPricesWEBSOCKETResponseProps {
  ws: WebSocket;
}

interface BTCUSDTPricesProps {
  interval: string;
  limit: number;
}

interface BTCUSDTResponseEntity {
  OpenTime: number;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  CloseTime: number;
  QuoteAssetVolume: number;
  NumberOfTrades: number;
  TakerBuyBaseAssetVolume: number;
  TakerBuyQuoteAssetVolume: number;
  Ignore_UnusedField: number;
}
