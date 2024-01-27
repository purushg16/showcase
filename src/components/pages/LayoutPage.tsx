import { Box } from "@chakra-ui/layout";
import { Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // if (colorMode === "dark") toggleColorMode();
  // if (colorMode === "light") toggleColorMode();

  return (
    <Grid
      background={colorMode === "light" ? "#FAFAFA" : ""}
      height="100%"
      overflowY="scroll"
      templateAreas={`"navbar" "outlet"`}
      templateRows={"5% 1fr"}
    >
      <GridItem area={"navbar"} style={{ padding: "2% 7%" }}>
        <Navbar />
      </GridItem>

      <GridItem area={"outlet"} padding={{ sm: 0, md: 10 }} height="100%">
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box width="80%">
            <Outlet />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default LayoutPage;

<Box height="100%" padding={10} overflowY="hidden">
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
</Box>;
