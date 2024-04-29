import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
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
          <VStack
            align="start"
            gap={0}
            p={12}
            px={8}
            border="1px solid"
            borderRadius={10}
            borderColor="gray.700"
          >
            <Text fontSize="xs" color="gray">
              Something went wrong!
            </Text>
            <Heading fontSize="3xl">
              Sorry for interruption,
              <br />
              It could be my fault.
            </Heading>
            <Text
              w="100%"
              fontSize="xs"
              py={4}
              borderBottom="1px solid"
              borderColor="gray.700"
            >
              Don't worry let's go home.
            </Text>

            <Box w="100%" pt={12} textAlign="end">
              <IconButton text="Home" route="" left icon={<IoHomeOutline />} />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </AnimateMove>
  );
};

export default ErrorPage;
