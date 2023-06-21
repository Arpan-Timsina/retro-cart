import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <Box bg="gray.200" borderWidth="1px" borderRadius="md" p={4} mb={4} boxShadow="dark-lg">
      <Flex direction="column" alignItems="center" height="100%">
        <Box mb={4} height="200px" width="200px">
          <Image
            src={productImage}
            alt={productName}
            objectFit="cover"
            height="100%"
            width="100%"
            borderRadius="md"
          />
        </Box>
        <Box mt="auto" textAlign="center">
          <Heading size="md" mb={2}>
            {productName}
          </Heading>
          <Text color="gray.600" fontSize="2xl">
            ${price}
          </Text>
        </Box>
        <Button
          variant="ghost"
          colorScheme="blue"
          onClick={() => addToCart(id)}
          mt={4}
        >
          Add to cart {cartItemCount > 0 && `(${cartItemCount})`}
        </Button>
      </Flex>
    </Box>
  );
};
