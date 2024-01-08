import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";

const Layout = () => {
  // const { toggleColorMode, colorMode } = useColorMode();
  // if (colorMode === "dark") toggleColorMode();
  // if (colorMode === "light") toggleColorMode();

  return (
    <Box height="100%">
      <Box height="100%">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
