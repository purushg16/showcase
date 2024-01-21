import {
  Box,
  Button,
  Flex,
  HStack,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import MenuModal from "./NavBarElements/MenuModal";
import { LinkButton } from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex alignItems="baseline">
        <Button
          p={0}
          variant="text"
          fontSize="md"
          fontWeight={700}
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          PURUSH
        </Button>
        <Spacer />
        <Show below="md">
          <MenuModal />
        </Show>
        <Show above="md">
          <HStack>
            <LinkButton text="Works" route="works" />
            <LinkButton text="About" route="about" />
            {/* <LinkButton text="Contact" route="contact" /> */}
          </HStack>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
