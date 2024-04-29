import { Grid } from "@chakra-ui/react";
import HireMe from "./Bento/HireMe";
import Projects from "./Bento/Projects";
import Resume from "./Bento/Resume";
import TechStack from "./Bento/TechStack";
import Head from "./Bento/Head";

const LandingBento = () => {
  return (
    <Grid
      mt={4}
      w="100%"
      templateRows="repeat(2, max-content)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <Head />
      <TechStack />
      <Projects />
      <HireMe />
      <Resume />
    </Grid>
  );
};

export default LandingBento;
