import { Box, Flex, Text } from "@chakra-ui/react";
import { IoHomeSharp } from "react-icons/io5";
import { IconButton } from "../elements/Button";
import AnimateMove from "../motions/Move";

const ErrorPage = () => {
  return (
    <AnimateMove direction="y">
      <Box position="absolute" h="100vh" w="100%">
        <Flex
          position="relative"
          flexDirection="column"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight={500}>
              Oops, you got lost!
            </Text>
            <Text mb={5}>Don't worry let's go home</Text>
            <IconButton text="Home" route="" left icon={<IoHomeSharp />} />
          </Box>
        </Flex>
      </Box>
    </AnimateMove>
  );
};

export default ErrorPage;
