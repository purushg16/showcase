import { Box } from "@chakra-ui/layout";
import { Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  return (
    <Box height="max-content">
      <Navbar />
      <Flex justifyContent="center" alignItems="start">
        <Box px={{ sm: "5%", md: "15%" }} py={10}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default LayoutPage;
