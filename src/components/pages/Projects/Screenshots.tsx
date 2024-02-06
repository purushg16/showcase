import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Work from "../../entities/Work";
import AnimateMove from "../../motions/Move";

interface Props {
  desc: string[];
  work: Work;
}

const Screenshots = ({ desc, work }: Props) => {
  return (
    <Box>
      <SimpleGrid spacing={16}>
        {[...Array(6)].map((_, index) => (
          <AnimateMove direction="y" delay={0.2 * (index + 1)}>
            <Image
              key={index}
              src={`/public/images/${work.slug}/${index + 1}.webp`}
              alt={desc[index]}
              loading="lazy"
              borderRadius={9}
            />
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
