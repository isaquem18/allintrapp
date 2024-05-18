import { createContext, useReducer, useContext } from 'react';
import { BTCUSDTPricesReducer } from '@reducers/BTCUSDTPriceReducer';

const initialState = {
  data: [],
  loading: false,
  error: null,
};
const BTCUSDTPriceContext = createContext<any>(initialState);

export function BTCUSDTPricesProvider({ children }) {
  const [state, dispatch] = useReducer(BTCUSDTPricesReducer, initialState);

  return (
    <BTCUSDTPriceContext.Provider value={[state, dispatch]}>
      {children}
    </BTCUSDTPriceContext.Provider>
  );
}

export const useBTCUSDTPrice = () => useContext(BTCUSDTPriceContext);
