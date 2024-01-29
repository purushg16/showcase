import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { SiInstagram } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box my={10}>
      <HStack my={2} gap={5}>
        <Link target="_blank" to="https://github.com/purushg16">
          <Icon as={VscGithubAlt} boxSize={5} />
        </Link>

        <Link target="_blank" to="https://instagram.com/_purush_g">
          <Icon as={SiInstagram} boxSize={5} />
        </Link>

        <Link
          target="_blank"
          to="https://www.linkedin.com/in/purushothaman-g-081a2622a"
        >
          <Icon as={TiSocialLinkedin} boxSize={6} />
        </Link>
      </HStack>
      <Text fontSize="xs">© 2024 PURUSHOTHAMAN DESIGN</Text>
    </Box>
  );
};

export default Footer;
