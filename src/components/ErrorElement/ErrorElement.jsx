import { Center, Heading } from "@chakra-ui/react";
import React from "react";

function ErrorElement() {
  return (
    <Center w="100vw" h="100vh">
      <Heading as="h1" size="4xl" noOfLines={1} color="black">
        404
      </Heading>
    </Center>
  );
}

export default ErrorElement;
