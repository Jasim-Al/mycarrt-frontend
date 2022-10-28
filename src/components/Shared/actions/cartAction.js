import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function cartAction(dispatch) {
  const toast = useToast();
  const [cartCount, setCartCount] = useState(0);

  const populateCart = async (cart) => {
    let count = 0;
    await cart.forEach((item) => (count += item.count));
    setCartCount(count);
    dispatch({ type: "POPULATE_CART", cart });
  };

  const addToCart = (item) => {
    setCartCount((count) => count + 1);
    dispatch({ type: "ADD_TO_CART", item });
    toast({
      title: "Added to cart.",
      description: "We've added this item to the cart for you.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  const removeItem = (item) => {
    setCartCount((count) => count - item.count);
    dispatch({ type: "REMOVE_ITEM", id: item.id });
    toast({
      title: "Removed from cart.",
      description: "We've removed this item from the cart for you.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  const decreaseCount = (id) => {
    setCartCount((count) => count - 1);
    dispatch({ type: "DECREASE_COUNT", id });
  };

  return { populateCart, addToCart, removeItem, cartCount, decreaseCount };
}
