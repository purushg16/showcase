import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Show,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import MenuModal from "./NavBarElements/MenuModal";
import { LinkButton } from "./Button";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex alignItems="baseline">
        <Button
          p={0}
          variant="text"
          fontSize="md"
          fontWeight={500}
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Purush
        </Button>
        <Spacer />
        <Show below="md">
          <MenuModal />
          <IconButton
            aria-label=""
            onClick={toggleColorMode}
            bg="none"
            _hover={{ bg: "none" }}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Show>
        <Show above="md">
          <HStack>
            <LinkButton text="Works" route="works" />
            <LinkButton text="About" route="about" />
            <IconButton
              aria-label=""
              onClick={toggleColorMode}
              bg="none"
              _hover={{ bg: "none" }}
            >
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </HStack>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
