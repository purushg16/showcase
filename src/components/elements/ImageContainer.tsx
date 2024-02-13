import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

const ImageContainer = ({
  children,
  margin = 8,
}: {
  children: ReactNode;
  margin?: number;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={2}
      mx="auto"
      my={margin}
      w={{ sm: "100%", md: "80%" }}
      maxW={{ sm: "100%", md: "80%" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      objectFit="cover"
      aspectRatio="16/9"
      borderRadius={9}
      overflow="hidden"
      _hover={{ opacity: 0.7 }}
      transition="all 0.7s"
      // bg="gray.700"
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;
