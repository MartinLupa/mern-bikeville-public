export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((product) => product.product_id !== action.payload);

    default:
      return state;
  }
};
