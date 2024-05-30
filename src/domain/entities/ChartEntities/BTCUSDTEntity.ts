type BTCUSDTEntityProps = any[];

interface BTCUSDTEntityReturn {
  OpenTime: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  CloseTime: Date;
  QuoteAssetVolume: number;
  NumberOfTrades: number;
  TakerBuyBaseAssetVolume: number;
  TakerBuyQuoteAssetVolume: number;
  Ignore_UnusedField: number;
}

export function BTCUSDTEntity(data: BTCUSDTEntityProps): BTCUSDTEntityReturn {
  return Object.freeze({
    OpenTime: new Date(data?.[0]),
    Open: parseFloat(data?.[1]),
    High: parseFloat(data?.[2]),
    Low: parseFloat(data?.[3]),
    Close: parseFloat(data?.[4]),
    Volume: parseFloat(data?.[5]),
    CloseTime: new Date(data?.[6]),
    QuoteAssetVolume: parseFloat(data?.[7]),
    NumberOfTrades: Number(data?.[8]),
    TakerBuyBaseAssetVolume: parseFloat(data?.[9]),
    TakerBuyQuoteAssetVolume: parseFloat(data?.[10]),
    Ignore_UnusedField: parseFloat(data?.[11]),
  });
}

export type BTCUSDTEntity = ReturnType<typeof BTCUSDTEntity>;
