import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import MenuModal from "./NavBarElements/MenuModal";

const Navbar = () => {
  return (
    <Box>
      <Flex alignItems="baseline">
        <Heading as={"h5"} size="md">
          Purush
        </Heading>
        <Spacer />
        <MenuModal />
      </Flex>
    </Box>
  );
};

export default Navbar;
