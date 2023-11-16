import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} spacing={10}>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
    </SimpleGrid>
  );
};

export default Dashboard;
