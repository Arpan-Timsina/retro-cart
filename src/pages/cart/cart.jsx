import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Button } from "@chakra-ui/react";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Your Cart Items
      </Heading>

      <Box>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </Box>

      {totalAmount > 0 ? (
        <Box mt={6}>
          <p>Subtotal: ${totalAmount}</p>
          <Button
            colorScheme="blue"
            onClick={() => navigate("/")}
            mr={2}
            mt={4}
            size="sm"
          >
            Continue Shopping
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              checkout();
              navigate("/");
            }}
            mt={4}
            size="sm"
          >
            Checkout
          </Button>
        </Box>
      ) : (
        <Heading as="h1" mt={6} textAlign="center">
          Your Shopping Cart is Empty
        </Heading>
      )}
    </Box>
  );
};
