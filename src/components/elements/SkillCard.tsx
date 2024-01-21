import { ReactIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import AnimateMove from "../motions/Move";
import AnimateRotate from "../motions/Rotate";

interface Props {
  skill: string;
  icon: IconType;
  score: number;
}

const SkillCard = ({ skill, icon, score }: Props) => {
  return (
    <AnimateRotate>
      <Box
        border="1px solid"
        borderColor="blue.200"
        p={5}
        pt={3}
        position="relative"
        overflowY="hidden"
      >
        <Flex width="100%" justifyContent="end">
          <Image as={icon} boxSize={10} color="blue.200" />
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
            color="blue.200"
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
