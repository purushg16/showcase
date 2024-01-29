import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import WorkCard from "../../elements/Cards/WorkCard";
import works from "../../data/works";

const ProjectsPage = () => {
  return (
    <Box>
      <Text fontSize="3xl" fontWeight={700} textTransform="capitalize">
        Works
      </Text>

      <Text color="gray">Here are some of the projects I've worked on.</Text>

      <Divider my={10} w={200} mx="auto" />

      <SimpleGrid columns={1} my={10} spacing={{ sm: 12, md: 8 }}>
        {works.results.data.map((work, index) => (
          <WorkCard work={work} index={index + 1} count={works.count} />
        ))}
      </SimpleGrid>

      <Divider my={10} w={200} mx="auto" />
    </Box>
  );
};

export default ProjectsPage;
