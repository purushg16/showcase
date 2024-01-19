import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoGlobe, IoLogoPython } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import ProjectCard from "../../elements/ProjectCard";
import AnimateMove from "../../motions/Move";

const ProjectsPage = () => {
  return (
    <Box py={5}>
      <AnimateMove direction="y">
        <Text fontWeight={500} fontSize="4xl" textAlign="center" mb={1}>
          Projects
        </Text>
        <Text textAlign="center" mb={10}>
          Well, let's see!
        </Text>
      </AnimateMove>

      <SimpleGrid columns={{ md: 1, lg: 3 }} gap={10}>
        <ProjectCard
          route="works/web"
          title="Web"
          color="#0000ff78"
          icon={IoGlobe}
          buttonColor="gray"
        />
        <ProjectCard
          route="works/python"
          title="Python"
          color="lavender"
          icon={IoLogoPython}
          buttonColor="blackAlpha"
        />
        <ProjectCard
          route="works/flutter"
          title="Flutter"
          color="white"
          icon={SiFlutter}
          buttonColor="gray"
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsPage;
