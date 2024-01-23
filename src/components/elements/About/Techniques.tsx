import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import React from "react";

const Techniques = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2 }}
      mt={40}
      spacing={{ md: 5, lg: 0 }}
    >
      <Box>
        <Text id="more" fontSize="4xl">
          Techniques
        </Text>
      </Box>

      <Box mt={{ sm: 5 }}>
        <Box>
          <Text fontSize="lg"> Experience Design </Text>
          <Text color="gray">UX/UI, Prototyping, Design System.</Text>
        </Box>

        <Box mt={5}>
          <Text fontSize="lg"> Branding </Text>
          <Text color="gray">
            Logo, Visual System, Illustration, Iconography.
          </Text>
        </Box>

        <Box mt={5}>
          <Text fontSize="lg"> Visual Storytelling </Text>
          <Text color="gray">Presentation, Education, Client relations.</Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Techniques;
