import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  designSystem: {
    typography: string[];
    color: string[];
  };
  tags: string[];
}

const DesignSystem = ({ designSystem, tags }: Props) => {
  return (
    <Box>
      <Text fontSize="3xl"> Properites </Text>

      <Flex flexDir="column" gap={4} my={4}>
        <Box>
          <Text color="gray"> Tags </Text>
          <HStack alignItems="start" my={4} gap={4}>
            {tags.map((tag) => (
              <Button key={tag} colorScheme="gray" size="sm" cursor="auto">
                {tag}
              </Button>
            ))}
          </HStack>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} my={8}>
          <GridItem>
            <Text color="gray">Typography</Text>
            <VStack alignItems="start" my={4}>
              {designSystem.typography.map((font) => (
                <Text key={font}> {font} </Text>
              ))}
            </VStack>
          </GridItem>
          <GridItem>
            <Text color="gray">Colors</Text>
            <SimpleGrid columns={2} rowGap={3} my={4}>
              {designSystem.color.map((c) => (
                <Text>
                  <Button
                    background={`#${c}`}
                    size="xs"
                    mr={2}
                    _hover={{ background: `#${c}` }}
                  />
                  {c}
                </Text>
              ))}
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default DesignSystem;
