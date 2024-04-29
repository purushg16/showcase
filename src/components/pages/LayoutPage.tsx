import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  return (
    <Box height="max-content" maxW={700} marginX="auto" px="1.5rem">
      <Navbar />
      <Flex justifyContent="center" alignItems="start">
        <Box py={10} w="100%">
          <Outlet />
          <ScrollRestoration />
        </Box>
      </Flex>
    </Box>
  );
};

export default LayoutPage;
