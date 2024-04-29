import { Flex, Text, Highlight, Box } from "@chakra-ui/react";

const LandingBento = () => {
  return (
    <Flex flexDir="column" gap={4} maxW={500} mx="auto">
      <Text
        p={4}
        bg="whiteAlpha.100"
        borderRadius={10}
        border="1px solid"
        borderColor="whiteAlpha.200"
        fontWeight={600}
      >
        Me, Briefly
      </Text>
      <Flex gap={4}>
        <Text
          maxW="70%"
          p={4}
          bg="whiteAlpha.100"
          borderRadius={10}
          border="1px solid"
          borderColor="whiteAlpha.200"
          fontWeight={600}
          color="gray"
        >
          I am <br />
          <Highlight
            styles={{ color: "white" }}
            query="Purushothaman,"
            children={`Purushothaman,`}
          />
          <br />
          creating beautiful websites & delivering excellent solutions
        </Text>
        <Box
          w="30%"
          bg="whiteAlpha.100"
          borderRadius={10}
          border="1px solid"
          borderColor="whiteAlpha.200"
        />
      </Flex>
      <Flex gap={4}>
        <Box
          w="30%"
          bg="whiteAlpha.100"
          borderRadius={10}
          border="1px solid"
          borderColor="whiteAlpha.200"
        />
        <Text
          maxW="70%"
          p={4}
          bg="whiteAlpha.100"
          borderRadius={10}
          border="1px solid"
          borderColor="whiteAlpha.200"
          fontWeight={600}
          color="gray"
        >
          I am <br />
          <Highlight
            styles={{ color: "white" }}
            query="Purushothaman,"
            children={`Purushothaman,`}
          />
          <br />
          creating beautiful websites & delivering excellent solutions
        </Text>
      </Flex>
    </Flex>
  );
};

export default LandingBento;
