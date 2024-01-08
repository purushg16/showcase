import { Box, Flex } from "@chakra-ui/react";
import {
  BackEndSkills,
  FrontEndSkills,
  OtherSkills,
} from "../../elements/Skills";
import useSkillStore from "../../../functions/store/skillStore";

const BG_IMG = "https://www.transparenttextures.com/patterns/hexabump.png";
const BG_CLR = "#000004";

const LandingLeft = () => {
  const selectedSkill = useSkillStore((s) => s.selectedSkill);

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
        {selectedSkill === "front" && <FrontEndSkills />}
        {selectedSkill === "back" && <BackEndSkills />}
        {selectedSkill === "others" && <OtherSkills />}
      </Box>
    </Flex>
  );
};

export default LandingLeft;
