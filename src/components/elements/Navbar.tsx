import { Box, Flex, HStack, Show, Spacer, Text } from "@chakra-ui/react";
import MenuModal from "./NavBarElements/MenuModal";
import { LinkButton } from "./Button";

const Navbar = () => {
  return (
    <Box>
      <Flex alignItems="baseline">
        <Text fontSize="md" fontWeight={700}>
          PURUSH
        </Text>
        <Spacer />
        <Show below="md">
          <MenuModal />
        </Show>
        <Show above="md">
          <HStack>
            <LinkButton text="About" route="about" />
            <LinkButton text="Contact" route="contact" />
          </HStack>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
