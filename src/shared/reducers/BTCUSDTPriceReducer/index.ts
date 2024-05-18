export const BTCUSDTPricesReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_BTCUSDT_PRICES':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'UPDATE_BTCUSDT_PRICES':
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case 'FAILURE_BTCUSDT_PRICES':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
