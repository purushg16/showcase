import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import LandingRight from "./LandingRight";
import LandingLeft from "./LandingLeft";

const LandingPage = () => {
  return (
    <Grid
      height="100%"
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "45% 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <LandingLeft />
        </GridItem>
      </Show>

      <GridItem area="main" height="100%">
        <LandingRight />
      </GridItem>
    </Grid>
  );
};

export default LandingPage;
