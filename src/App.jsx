import Header from "./components/Header/Header";
import ProductsList from "./components/Products/ProductsList";
import "./App.css";
import { CartContext } from "./components/context/cartContext";
import { useReducer } from "react";
import cartReducer from "./components/Shared/reducers/cartReducer";
import cartAction from "./components/Shared/actions/cartAction";
import NavBar from "./components/NavBar/NavBar";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const controls = useAnimationControls();
  const { populateCart, addToCart, removeItem, cartCount, decreaseCount } =
    cartAction(cartDispatch);

  useEffect(() => {
    if (isCartOpen) {
      controls.start({
        width: "70vw",
      });
    } else {
      controls.start({
        width: "100vw",
      });
    }
  }, [isCartOpen]);

  return (
    <CartContext.Provider
      value={{
        cart,
        populateCart,
        cartCount,
        addToCart,
        removeItem,
        decreaseCount,
      }}
    >
      <AnimatePresence>
        <Box display="flex">
          <motion.div
            key="main"
            className="App"
            style={!isCartOpen && { width: "100vw" }}
            animate={controls}
            maxH="100vh"
            overflowX="scroll"
          >
            <Header setCart={setIsCartOpen} />
            <NavBar />
            <div className="applist">
              <ProductsList />
              <ProductsList />
              <ProductsList />
            </div>
          </motion.div>
          {isCartOpen && (
            <motion.div
              key="cart"
              className="cart"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "30vw", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
            >
              <Cart setCart={setIsCartOpen} />
            </motion.div>
          )}
        </Box>
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export default App;
