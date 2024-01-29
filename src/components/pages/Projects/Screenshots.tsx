import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  screenshots: string[];
  desc: string[];
}

const Screenshots = ({ desc, screenshots }: Props) => {
  return (
    <Box>
      <Text fontSize="3xl"> Screenshots </Text>
      <SimpleGrid spacing={8}>
        {screenshots.map((img, index) => (
          <Box>
            <Image src={img} alt="nope" loading="lazy" borderRadius={9} />
            <Text
              textAlign="center"
              mt={2}
              fontSize="sm"
              color="gray"
              maxW={400}
              marginX="auto"
            >
              {desc[index]}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Screenshots;
