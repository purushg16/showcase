import { Box, Flex, HStack, Show, Spacer, Text } from "@chakra-ui/react";
import MenuModal from "./NavBarElements/MenuModal";
import { LinkButton } from "./Button";

const Navbar = () => {
  return (
    <Box>
      <Flex alignItems="baseline">
        <Text fontSize="xl">purush</Text>
        <Spacer />
        <Show below="md">
          <MenuModal />
        </Show>
        <Show above="md">
          <Text> ~ Maximum Effort</Text>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
