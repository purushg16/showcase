import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../elements/Navbar";

const Layout = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  // if (colorMode === "light") toggleColorMode();
  // if (colorMode === "dark") toggleColorMode();

  return (
    <Box
      height="100%"
      padding={10}
      background='url("https://www.transparenttextures.com/patterns/fake-brick.png");'
      backgroundColor="black"
      overflowY="hidden"
    >
      <Navbar />
      <Box
        height="100%"
        maxHeight="100%"
        overflowY="scroll"
        width="inherit"
        css={{
          "&::-webkit-scrollbar": {
            width: "0.5em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
