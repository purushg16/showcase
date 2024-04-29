import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Show,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "./Button";
import MenuModal from "./NavBarElements/MenuModal";
import { Link } from "react-router-dom";
import favicon from "../../assets/favicon.svg";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      zIndex={20}
      position="sticky"
      top={0}
      bg={colorMode === "dark" ? "#000" : "white"}
    >
      <Flex alignItems="center" py="0.75rem">
        <Link to="/" className="shrink-0 text-primary">
          {colorMode === "dark" ? (
            <svg
              id="erOZfPbxXBo1"
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
            >
              <ellipse
                rx="78.089633"
                ry="27.840652"
                transform="matrix(1.204348 0 0 1.634145 150 104.504338)"
                fill="#fff"
                stroke-width="0"
              />
              <ellipse
                rx="42.779538"
                ry="76.392033"
                transform="matrix(.746032 0 0 1 118.085096 168.062472)"
                fill="#fff"
                stroke-width="0"
              />
            </svg>
          ) : (
            <svg
              id="evQi0V7Dx4t1"
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
            >
              <ellipse
                rx="78.089633"
                ry="27.840652"
                transform="matrix(1.204348 0 0 1.634145 150 104.504338)"
                stroke-width="0"
              />
              <ellipse
                rx="42.779538"
                ry="76.392033"
                transform="matrix(.746032 0 0 1 118.085096 168.062472)"
                stroke-width="0"
              />
            </svg>
          )}
        </Link>
        <Spacer />
        <Box>
          <Show below="md">
            <MenuModal />
          </Show>
          <Show above="md">
            <HStack gap={8}>
              <LinkButton text="Works" route="works" />
              <LinkButton text="Blogs" route="blogs" />
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
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
