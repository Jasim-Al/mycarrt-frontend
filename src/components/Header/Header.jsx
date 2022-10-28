import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import cartImg from "../../assets/cart.svg";
import classes from "./Header.module.css";
import { Badge, Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import cartIcon from "../../assets/cartIcon.svg";

function Header({ setCart }) {
  const [image, setImage] = useState(image1);
  const [count, setCount] = useState(1);
  const [cartNum, setCartNum] = useState(0);
  useEffect(() => {
    const timer =
      count < 4 && setInterval(() => setCount((count) => (count += 1)), 5000);

    switch (count) {
      case 1:
        setImage(image1);
        break;
      case 2:
        setImage(image2);
        break;
      case 3:
        setImage(image3);
        break;
      case 4:
        setImage(image4);
        setCount(1);
        break;
      default:
        break;
    }

    return () => clearInterval(timer);
  }, [count]);

  const { cart, cartCount } = useContext(CartContext);

  useEffect(() => {
    setCartNum(cartCount);
  }, [cart]);

  return (
    <Box boxShadow="lg" className={classes.header}>
      <Box className={classes.header__slide}>
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            className={classes.header__slideImage}
            src={image}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "80vw" }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              duration: 0.5,
            }}
          ></motion.img>
        </AnimatePresence>
        <div className={classes.header__content}>
          <div className={classes.header__contentContent}>
            <div className={classes.header__contentLogo}>
              <img src={cartImg} alt="cart" className={classes.header__logo} />
              <Heading as="h1" size="4xl" noOfLines={1} color="white">
                <span className={classes.green}>my</span>carrt
              </Heading>
            </div>
            <Box className={classes.cartIcon}>
              <span>{cartNum}</span>
              <Center
                rounded={5}
                px={4}
                backgroundColor="#66BB6A"
                transition="all 200ms ease"
                _hover={{ borderRadius: "15px" }}
                onClick={() => {
                  setCart((cart) => !cart);
                }}
              >
                <img src={cartIcon} alt="Cart Icon" />
                <Text color="white" fontSize="4xl">
                  Cart
                </Text>
              </Center>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Header;
