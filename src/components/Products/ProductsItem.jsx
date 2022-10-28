import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ProductsItem({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <Box
      boxShadow="lg"
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      h="48rem"
      backgroundColor="white"
    >
      <Image
        src={item.image}
        objectFit="cover"
        alt="Not Found"
        loading="lazy"
        h="50%"
        w="100%"
      />
      <Box p="6">
        <Box display="flex" justifyContent="space-between">
          <Heading>${item.price}</Heading>
          <Button
            variant="ghost"
            colorScheme="green"
            fontSize="5xl"
            size="lg"
            onClick={() => {
              addToCart(item);
            }}
          >
            <AiOutlinePlusCircle />
          </Button>
        </Box>
        <Text>{item.name}</Text>
        <Text>{item.category}</Text>
        <Text>{item.quantity}</Text>
        {item.dealEnding && <Text>Deal ending soon!</Text>}
        <Center
          borderWidth={1}
          rounded={5}
          borderColor="red"
          borderStyle="dotted"
          mt={5}
        >
          <Text color="red">Save {item.name}</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default ProductsItem;
