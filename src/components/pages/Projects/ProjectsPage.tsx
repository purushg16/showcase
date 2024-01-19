import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IoGlobe, IoLogoPython, IoUmbrella } from "react-icons/io5";
import { SiFlutter, SiPolymerproject } from "react-icons/si";
import ProjectCard from "../../elements/ProjectCard";
import AnimateMove from "../../motions/Move";

const ProjectsPage = () => {
  return (
    <Box paddingY={{ sm: 20, md: 5 }}>
      <AnimateMove direction="y">
        <Text fontWeight={500} fontSize="4xl" mb={1}>
          Projects
          <Icon as={IoUmbrella} ml={1} />
        </Text>
        <Text mb={10}>
          I have created about 10+ projects on each firm listed below. Feel free
          to check everything!
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
