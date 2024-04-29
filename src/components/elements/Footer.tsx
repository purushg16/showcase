import { Box, Divider, HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Divider my={8} />
      <HStack w="100%" justify="space-between">
        <Text fontSize="xs">PURUSHOTHAMAN DESIGN</Text>
        <Text fontSize="xs"> © 2024 </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
