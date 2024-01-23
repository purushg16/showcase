import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { IconButton } from "../elements/Button";
import { NavButton } from "../elements/Button";
import AnimateMove from "../motions/Move";

const ErrorPage = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      bg="#FAFAFA"
    >
      <Box textAlign="center">
        <AnimateMove direction="y">
          <Text fontSize="6xl" fontWeight={500}>
            Oops, you got lost!
          </Text>
          <Text fontSize="lg" mb={5}>
            Don't worry let's go home
          </Text>
          <IconButton
            text="Let's Go Home"
            route=""
            left
            icon={<IoHome />}
            color="blue"
          />
        </AnimateMove>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
