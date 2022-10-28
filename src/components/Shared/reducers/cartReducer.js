export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "POPULATE_CART":
      return action.cart;
    case "ADD_TO_CART":
      const foundItem = state.find((item) => item.id === action.item.id);
      if (foundItem) {
        return [
          ...state.map((item) =>
            item.id === action.item.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        ];
      } else {
        return [...state, action.item];
      }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);

    case "DECREASE_COUNT":
      return [
        ...state.map((item) =>
          item.id === action.id
            ? { ...item, count: item.count > 1 && item.count - 1 }
            : item
        ),
      ];

    default:
      return state;
  }
}
