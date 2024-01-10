import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex alignItems="baseline">
        <Heading as={"h5"} size="md">
          Purush
        </Heading>
        <Spacer />
        <Button variant="text" size="lg">
          <HamburgerIcon />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
