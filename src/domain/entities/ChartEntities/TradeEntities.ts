export interface Trade {
  id: number;
  price: number;
  quantity: number;
  buyerOrderId: number;
  sellerOrderId: number;
  tradeTime: number;
  isBuyerMarketMaker: boolean;
}
