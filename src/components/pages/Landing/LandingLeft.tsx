import { Box, Flex } from "@chakra-ui/react";
import {
  BackEndSkills,
  FrontEndSkills,
  OtherSkills,
} from "../../elements/Skills";

const BG_IMG = "https://www.transparenttextures.com/patterns/hexabump.png";
const BG_CLR = "#000004";

const LandingLeft = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      backgroundColor={BG_CLR}
      backgroundImage={`url(${BG_IMG})`}
    >
      <Box px={10}>
        <FrontEndSkills />
        {/* <BackEndSkills /> */}
        {/* <OtherSkills /> */}
      </Box>
    </Flex>
  );
};

export default LandingLeft;
