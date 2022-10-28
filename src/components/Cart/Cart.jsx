import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <Box h="100%" w="100%">
      <Box display="flex" justifyContent="end" p={5}>
        <Button
          leftIcon={<AiOutlineClose />}
          colorScheme="green"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          fontWeight={500}
        ></Button>
      </Box>
      <Box>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}

export default Cart;
