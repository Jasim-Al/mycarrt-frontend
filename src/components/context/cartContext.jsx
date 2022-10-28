import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  cartCount: null,
  addToCart: () => {},
  removeItem: () => {},
  decreaseCount: () => {},
});
