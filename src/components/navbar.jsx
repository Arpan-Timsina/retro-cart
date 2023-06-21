import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box bg="gray.900" py={2}>
      <Flex justifyContent="space-between" px={4} maxW="960px" mx="auto">
        <Box>
          <ChakraLink as={Link} to="/" mr={4} fontWeight="bold" color="white">
            Shop
          </ChakraLink>
        </Box>
        <ChakraLink as={Link} to="/cart">
          <ShoppingCart size={32} color="white" />
        </ChakraLink>
      </Flex>
    </Box>
  );
};
