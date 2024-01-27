import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import AnimateMove from "../../motions/Move";
import { Link } from "react-router-dom";

const MenuModal = () => {
  return (
    <>
      <Menu>
        <MenuButton
          maxH="100%"
          as={Button}
          bg="none"
          _hover={{ bg: "none" }}
          _focus={{ bg: "none" }}
          _active={{ bg: "none" }}
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>
            <AnimateMove direction="y">
              <Link to="about"> About </Link>
            </AnimateMove>
          </MenuItem>
          <MenuItem>
            <AnimateMove direction="y">
              <Link to="works"> Works </Link>
            </AnimateMove>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuModal;
