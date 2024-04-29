import { GridItem, Heading, Text } from "@chakra-ui/react";

const TechStack = () => {
  return (
    <GridItem
      order={{ base: 1, md: 0 }}
      rowSpan={1}
      colSpan={{ base: 3, md: 2 }}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius={10}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      gap={8}
    >
      <Text fontSize="md" opacity={0.7}>
        Tech Stacks.
      </Text>
      <Heading fontSize="md" lineHeight={1.5}>
        React, Node, Typescript, MongoDb, Figma, etc.
      </Heading>
    </GridItem>
  );
};

export default TechStack;
