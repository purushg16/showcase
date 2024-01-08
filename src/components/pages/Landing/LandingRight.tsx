import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Show,
  Text,
} from "@chakra-ui/react";
import { IoNavigate } from "react-icons/io5";
import { TIconButton } from "../../elements/Button";

const LandingRight = () => {
  return (
    <Flex
      px={10}
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      height="100%"
    >
      <Box>
        <Text ml={3} fontSize="2xl" as="b">
          Purush's
        </Text>

        <Show above="lg">
          <Heading lineHeight="90%" fontSize="9em">
            SHOW
            <br />
            CASE<span style={{ color: "red" }}>.</span>
          </Heading>
        </Show>

        <Show below="lg">
          <Heading lineHeight="90%" fontSize="8em">
            Show
            <br />
            Case<span style={{ color: "red" }}>.</span>
          </Heading>
        </Show>

        <Box ml={5}>
          <HStack my={3}>
            <Button variant="ghost"> Front-end </Button>
            <Button variant="ghost"> Back-end </Button>
            <Button variant="ghost"> Others </Button>
          </HStack>

          <TIconButton text="See Projects" icon={IoNavigate} color="red" />
        </Box>
      </Box>
    </Flex>
  );
};

export default LandingRight;
