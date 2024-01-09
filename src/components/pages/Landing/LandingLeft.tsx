import { Box, Flex, useColorMode } from "@chakra-ui/react";
import useSkillStore from "../../../functions/store/skillStore";
import SkillCard from "../../elements/SkillCard";

const BG_IMG = "https://www.transparenttextures.com/patterns/gplay.png";

const LandingLeft = () => {
  const { colorMode } = useColorMode();
  const selectedSkill = useSkillStore((s) => s.selectedSkill);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      backgroundColor={colorMode}
      backgroundImage={`url(${BG_IMG})`}
    >
      <Box px={10}>
        <SkillCard skill={selectedSkill} />
      </Box>
    </Flex>
  );
};

export default LandingLeft;
