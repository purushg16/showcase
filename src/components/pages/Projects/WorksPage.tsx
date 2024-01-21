import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IoGlobe, IoLogoPython, IoUmbrella } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import AnimateMove from "../../motions/Move";
import ProjectCard from "../../elements/Cards/ProjectCard";

const WorksPage = () => {
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
        />
        <ProjectCard
          route="works/python"
          title="Python"
          color="lavender"
          icon={IoLogoPython}
        />
        <ProjectCard
          route="works/flutter"
          title="Flutter"
          color="white"
          icon={SiFlutter}
        />
      </SimpleGrid>
    </Box>
  );
};

export default WorksPage;
