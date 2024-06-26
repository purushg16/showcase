import { Box, Image, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import Work from "../../entities/Work";
import AnimateMove from "../../motions/Move";

interface Props {
  desc: string[];
  work: Work;
}

const Screenshots = ({ desc, work }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <SimpleGrid spacing={16}>
        {work.screenshots.map((ss, index) => (
          <AnimateMove key={index} direction="y" delay={0.2 * (index + 1)}>
            <Box
              p={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              objectFit="cover"
              aspectRatio="16/9"
              borderRadius={9}
              overflow="hidden"
              _hover={{ opacity: 0.7 }}
              transition="all 0.7s"
              bg={colorMode === "dark" ? "gray.700" : "gray.50"}
              borderColor={colorMode === "dark" ? "gray.600" : "gray.100"}
            >
              <Image
                key={index}
                src={ss}
                alt={desc[index]}
                loading="lazy"
                borderRadius={9}
              />
            </Box>

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
          </AnimateMove>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Screenshots;
