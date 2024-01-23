import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import AnimateRotate from "../../motions/Rotate";
import {
  SiFlutter,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

interface Props {
  skill: string;
  score: number;
}

const SkillCard = ({ skill, score }: Props) => {
  const IconMap: { [key: string]: [IconType, string] } = {
    react: [SiReact, "blue"],
    node: [SiNodedotjs, "green"],
    mongoDB: [SiMongodb, "green"],
    git: [SiGithub, "blue"],
    python: [SiPython, "green"],
    flutter: [SiFlutter, "blue"],
  };

  return (
    <AnimateRotate>
      <Box
        border="1px solid"
        borderColor={`${IconMap[skill][1]}.200`}
        p={5}
        pt={3}
        position="relative"
        overflowY="hidden"
      >
        <Flex width="100%" justifyContent="end">
          <Image
            as={IconMap[skill][0]}
            boxSize={10}
            color={`${IconMap[skill][1]}.200`}
          />
        </Flex>
        <VStack alignItems="left" pt={5}>
          <Text fontSize="sm" opacity={0.5} fontWeight={500} lineHeight={1}>
            {skill}
          </Text>
          <Text
            fontSize="5xl"
            fontWeight={600}
            lineHeight={0.7}
            id="font-oswald"
            color={`${IconMap[skill][1]}.200`}
          >
            {score}
            <small style={{ fontSize: "0.5em", fontWeight: 100 }}>%</small>
          </Text>
        </VStack>
      </Box>
    </AnimateRotate>
  );
};

export default SkillCard;
