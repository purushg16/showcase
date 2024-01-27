import { Box } from "@chakra-ui/layout";
import { Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      background={colorMode === "light" ? "#FAFAFA" : ""}
      height="100%"
      templateAreas={`"navbar" "outlet"`}
      templateRows={"20% 1fr"}
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
