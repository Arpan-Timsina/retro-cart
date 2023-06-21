import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";

export const Shop = () => {
  return (
    <Box bg="gray.300" minHeight="100vh" py={8} px={4}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl" mb={4}>
          Retro Games
        </Heading>
      </Box>

      <SimpleGrid spacing={4} columns={[1, 2, 3,4]} maxW="1200px" mx="auto">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
