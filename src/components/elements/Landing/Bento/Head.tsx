import { GridItem, HStack, Heading, Button } from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={6}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="base"
      borderRadius={10}
    >
      <HStack w="100%" justify="space-between">
        <Heading fontSize="md"> Myself, briefly </Heading>
        <Link to="/about">
          <Button size="sm" rightIcon={<TbArrowUpRight />}>
            About
          </Button>
        </Link>
      </HStack>
    </GridItem>
  );
};

export default Head;
