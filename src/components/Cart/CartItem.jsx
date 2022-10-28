import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";

import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io";
import { CartContext } from "../context/cartContext";

function CartItem({ item }) {
  const { addToCart, decreaseCount, removeItem } = useContext(CartContext);
  return (
    <Box
      display="flex"
      p={5}
      boxShadow="lg"
      m={5}
      rounded="5"
      mb={10}
      backgroundColor="#fff"
      alignItems="center"
    >
      <Box>
        <Image src={item.image} w="10rem" h="10rem" borderRadius="50%" />
      </Box>
      <Box p={5}>
        <Heading size="xl">{item.name}</Heading>
        <Text>${item.price}</Text>
        <Text>{item.quantity}</Text>
        <ButtonGroup size="lg" isAttached variant="outline">
          <IconButton
            aria-label="reduce Item"
            icon={<IoMdRemoveCircleOutline />}
            disabled={item.count <= 1 ? true : false}
            onClick={() => {
              decreaseCount(item.id);
            }}
          />
          <Button>{item.count}</Button>
          <IconButton
            aria-label="reduce Item"
            icon={<IoMdAddCircleOutline />}
            onClick={() => addToCart(item)}
          />
          <Button
            colorScheme="red"
            onClick={() => {
              removeItem(item);
            }}
          >
            Remove
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default CartItem;
