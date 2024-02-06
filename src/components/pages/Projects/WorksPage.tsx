import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import works from "../../data/works";
import WorkCard from "../../elements/Cards/WorkCard";
import AnimateMove from "../../motions/Move";

const WorksPage = () => {
  return (
    <Box>
      <AnimateMove direction="y">
        <Text fontSize="3xl" fontWeight={700} textTransform="capitalize">
          Works
        </Text>

        <Text color="gray">Here are some of the projects I've worked on.</Text>
      </AnimateMove>

      <Divider my={10} w="40%" mx="auto" />

      <AnimateMove direction="y">
        <SimpleGrid my={10} spacing={16}>
          {works.results.data.map((work, index) => (
            <AnimateMove delay={0.1 * (index + 1)}>
              <WorkCard work={work} />
            </AnimateMove>
          ))}
        </SimpleGrid>
      </AnimateMove>

      <Divider my={10} w="40%" mx="auto" />
    </Box>
  );
};

export default WorksPage;
