
export const initialState = {
  list: [],
  error: null,
};

export default (state = initialState, action = {}) => {
  const { payload, error } = action;
  console.log(payload);
  if(error) {
    return {
      ...state,
      error: error,
    }
  }
  return {
    ...state,
    list: payload,
  }
}