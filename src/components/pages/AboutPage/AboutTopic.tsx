import { Flex, Box, Text } from "@chakra-ui/react";
import Tools from "./Tools";
import { ReactNode } from "react";
import AnimateMove from "../../motions/Move";

interface Props {
  title: String;
  children: String[] | ReactNode[];
  delay: number;
}

const AboutTopics = ({ title, children, delay }: Props) => {
  return (
    <AnimateMove direction="y" delay={delay}>
      <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap={4}>
        <Box w={{ base: "max-content", md: "20%" }}>
          <Text color="gray"> {title} </Text>
        </Box>

        <Box flex={1}>
          <Text>
            {children.length > 0 &&
              children.map((desc, index) => (
                <Text key={index} my={index !== 0 ? 4 : 0}>
                  {desc}
                </Text>
              ))}
          </Text>
        </Box>
      </Flex>
    </AnimateMove>
  );
};

export default AboutTopics;
