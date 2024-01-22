import {
  Box,
  Button,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  designSystem: {
    typography: string[];
    color: string[];
  };
}

const DesignSystem = ({ designSystem }: Props) => {
  return (
    <Box>
      <Text fontSize="4xl"> Design System </Text>

      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} my={5}>
        <GridItem>
          <Text fontSize="xl" color="gray">
            Typography
          </Text>
          <VStack alignItems="start" my={5}>
            {designSystem.typography.map((font) => (
              <Text key={font}> {font} </Text>
            ))}
          </VStack>
        </GridItem>
        <GridItem>
          <Text fontSize="xl" color="gray">
            Colors
          </Text>
          <SimpleGrid columns={3} rowGap={3} my={5}>
            {designSystem.color.map((c) => (
              <Text>
                <Button
                  background={`#${c}`}
                  size="xs"
                  mr={2}
                  _hover={{ bg: `#${c}` }}
                />
                {c}
              </Text>
            ))}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default DesignSystem;
