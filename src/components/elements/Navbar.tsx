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
import { Link } from "react-router-dom";

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
      <Flex alignItems="center" py="0.75rem">
        {/* <Button
          p={0}
          variant="text"
          fontWeight={500}
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Purush
        </Button> */}
        <Link to="/" className="shrink-0 text-primary">
          <svg
            style={{ transform: "scaleY(-1)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 375 375"
            version="1.2"
          >
            <defs>
              <clipPath id="clip1">
                <path d="M 103.636719 64.171875 L 271.476562 64.171875 L 271.476562 310 L 103.636719 310 Z M 103.636719 64.171875 " />
              </clipPath>
            </defs>
            <g id="surface1">
              <g clipPath="url(#clip1)" clipRule="nonzero">
                <path
                  fill="currentColor"
                  d="M 211.375 151.808594 C 203.050781 149.433594 194.765625 155.722656 194.765625 164.390625 L 194.765625 297.785156 C 194.765625 305.234375 201.695312 310.808594 208.941406 309.09375 C 244.675781 300.671875 271.355469 268.492188 271.355469 230.195312 C 271.355469 193.117188 246.363281 161.785156 211.375 151.808594 Z M 180.15625 144.734375 L 180.15625 297.785156 C 180.15625 305.234375 173.230469 310.808594 165.980469 309.09375 C 130.246094 300.675781 103.566406 268.492188 103.566406 230.195312 L 103.566406 74.296875 C 103.566406 68.449219 108.902344 64.046875 114.640625 65.164062 C 151.925781 72.410156 180.15625 105.335938 180.15625 144.734375 Z M 180.15625 144.734375 "
                />
              </g>
            </g>
          </svg>
        </Link>
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
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
