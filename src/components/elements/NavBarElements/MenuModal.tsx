import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateMove from "../../motions/Move";
import { LinkButton } from "../Button";

const MenuModal = () => {
  const [show, hide] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Box pos="relative">
      <Button
        maxH="100%"
        bg="none"
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        _active={{ bg: "none" }}
        onClick={() => hide(!show)}
      >
        Menu
      </Button>

      {show && (
        <AnimateMove direction="y">
          <Box
            w={130}
            position="absolute"
            bg={colorMode === "dark" ? "black" : "white"}
            boxShadow="0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)"
            borderRadius={9}
            p={5}
            left={-7}
          >
            <VStack>
              <LinkButton text="Works" route="works" size="md" />
              <LinkButton text="Blogs" route="blogs" size="md" />
              <LinkButton text="About" route="about" size="md" />
            </VStack>
          </Box>
        </AnimateMove>
      )}

      {/* <Menu>
        <MenuButton
          maxH="100%"
          as={Button}
          bg="none"
          _hover={{ bg: "none" }}
          _focus={{ bg: "none" }}
          _active={{ bg: "none" }}
          color="gray"
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem _hover={{ bg: "none" }}>
            <Link to="/about" style={{ width: "100%" }}>
              About
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "none" }}>
            <Link to="/works" style={{ width: "100%" }}>
              Works
            </Link>
          </MenuItem>
        </MenuList>
      </Menu> */}
    </Box>
  );
};

export default MenuModal;
