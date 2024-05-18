export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_AUTH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case 'FETCH_AUTH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
