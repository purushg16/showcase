import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Show,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "./Button";
import MenuModal from "./NavBarElements/MenuModal";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      zIndex={20}
      position="sticky"
      top={0}
      bg={colorMode === "dark" ? "#121212" : "white"}
    >
      <Flex alignItems="center" paddingX={{ sm: "5%", md: "15%" }} py={4}>
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
        <Box>
          <Show below="md">
            <MenuModal />
          </Show>
          <Show above="md">
            <HStack>
              <LinkButton text="Works" route="works" />
              <LinkButton text="About" route="about" />
            </HStack>
          </Show>
        </Box>

        <Show above="md">
          <Spacer />
        </Show>

        <IconButton
          aria-label=""
          onClick={toggleColorMode}
          bg="none"
          _hover={{ bg: "none" }}
        >
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
