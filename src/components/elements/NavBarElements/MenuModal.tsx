import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
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
      </Menu>
    </>
  );
};

export default MenuModal;
