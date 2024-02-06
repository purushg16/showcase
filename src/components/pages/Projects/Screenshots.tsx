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
        {[...Array(work.screenshotCount)].map((_, index) => (
          <AnimateMove direction="y" delay={0.2 * (index + 1)}>
            <Box
              p={5}
              display="flex"
              objectFit="cover"
              aspectRatio="16/9"
              borderRadius={9}
              overflow="hidden"
              _hover={{ opacity: 0.7 }}
              transition="all 0.7s"
              // bg="gray.700"
              bg={colorMode === "dark" ? "gray.700" : "gray.100"}
            >
              <Image
                key={index}
                src={`${import.meta.env.BASE_URL}src/assets/images/${
                  work.slug
                }/${index + 1}.webp`}
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
