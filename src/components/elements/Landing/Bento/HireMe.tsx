import { GridItem, VStack, HStack, Button, Icon, Text } from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <GridItem
      order={{ base: 1, md: 0 }}
      rowSpan={1}
      colSpan={{ base: 6, md: 4 }}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius={10}
      boxShadow="base"
    >
      <VStack gap={8} align="start">
        <Text fontSize="md">
          I would love to be a part on you next step.
          <br />
          And, I am also open to work in a company!
        </Text>
        <HStack gap={4}>
          <Link to="connect">
            <Button
              size="sm"
              borderRadius={0}
              pb={2}
              variant="link"
              rightIcon={<Icon as={TbArrowUpRight} />}
              borderBottom="1px solid gray"
              _hover={{ opacity: 0.8 }}
            >
              Hire Me!
            </Button>
          </Link>
        </HStack>
      </VStack>
    </GridItem>
  );
};

export default HireMe;
