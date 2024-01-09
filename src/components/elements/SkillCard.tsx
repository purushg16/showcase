import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useAnimate, useInView } from "framer-motion";
import { skillType } from "../../functions/store/skillStore";
import skillDetails from "../data/skillDetails";
import AnimateRotate from "../motions/Rotate";
import { useEffect } from "react";
import AnimateMove from "../motions/Move";

interface Props {
  skill: skillType;
}

const SkillCard = ({ skill }: Props) => {
  const { colorMode } = useColorMode();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { rotate: [-50, 0] });
    }
  }, [isInView]);

  return (
    <Box
      border="1px solid"
      borderColor={colorMode}
      p={10}
      background={colorMode === "dark" ? "#00000073" : "dark"}
    >
      <Flex>
        {skill === "front" && (
          <AnimateMove>
            <Heading size="lg" as={"h1"} id="font-mono">
              {skillDetails["front"].title}
            </Heading>
          </AnimateMove>
        )}
        {skill === "back" && (
          <AnimateMove>
            <Heading size="lg" as={"h1"} id="font-mono">
              {skillDetails["back"].title}
            </Heading>
          </AnimateMove>
        )}
        {skill === "others" && (
          <AnimateMove>
            <Heading size="lg" as={"h1"} id="font-mono">
              {skillDetails["others"].title}
            </Heading>
          </AnimateMove>
        )}
        <Spacer />
      </Flex>

      <Divider my={5} />
      <Box>
        {skill === "front" && (
          <AnimateMove direction="y">
            <Text>{skillDetails["front"].desc}</Text>
          </AnimateMove>
        )}
        {skill === "back" && (
          <AnimateMove direction="y">
            <Text>{skillDetails["back"].desc}</Text>
          </AnimateMove>
        )}
        {skill === "others" && (
          <AnimateMove direction="y">
            <Text>{skillDetails["others"].desc}</Text>
          </AnimateMove>
        )}
      </Box>
      <Heading size="lg" as={"h1"} id="font-mono" mt={5}>
        Tech's
      </Heading>
      <Divider my={5} />
      <HStack gap={6} ref={scope}>
        {skill === "front" &&
          skillDetails["front"].icons.map((icon, index) => (
            <AnimateRotate key={index}>
              <Icon as={icon} boxSize="50px" />
            </AnimateRotate>
          ))}

        {skill === "back" &&
          skillDetails["back"].icons.map((icon, index) => (
            <AnimateRotate key={index}>
              <Icon as={icon} boxSize="50px" />
            </AnimateRotate>
          ))}

        {skill === "others" &&
          skillDetails["others"].icons.map((icon, index) => (
            <AnimateRotate key={index}>
              <Icon as={icon} boxSize="50px" />
            </AnimateRotate>
          ))}
      </HStack>
    </Box>
  );
};

export default SkillCard;
function useRef(arg0: null) {
  throw new Error("Function not implemented.");
}
