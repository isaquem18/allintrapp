import { createContext, useReducer, useContext } from 'react';
import { AuthReducer } from '@reducers/AuthReducer';

const initialState = {
  data: {
    isLoggedIn: true,
  },
  loading: false,
  error: null,
};
const AuthContext = createContext<any>(initialState);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
