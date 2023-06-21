import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Box, Flex, Image, Text, Button,Input } from "@chakra-ui/react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  // const cartItemCount = cartItems[id];
  
  const handleQuantityChange = (e) => {
    const newAmount = Number(e.target.value);
    updateCartItemCount(newAmount, id);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={4} display="flex">
      <Image src={productImage} boxSize="80px" objectFit="cover" mr={4} />
      <Flex alignItems="center" justifyContent="space-between" flex="1">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {productName}
          </Text>
          <Text color="gray.500">${price}</Text>
        </Box>
        <Flex alignItems="center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(id)}
          >
            -
          </Button><Input
            type="number"
            value={cartItems[id]}
            onChange={handleQuantityChange}
            w="60px"
            textAlign="center"
          />
          {/* <Text>{cartItemCount}</Text> */}
          <Button variant="ghost" size="sm" onClick={() => addToCart(id)}>
            +
          </Button>
          <Button
            variant="ghost"
            size="sm"
            colorScheme="red"
            onClick={() => updateCartItemCount(0, id)}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
