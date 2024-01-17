import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { IoArrowRedo, IoGlobe } from "react-icons/io5";
import { SiFlutter, SiPython } from "react-icons/si";
import ProjectCard from "../../elements/ProjectCard";
import AnimateMove from "../../motions/Move";

const ProjectsPage = () => {
  return (
    <Box height="100%" padding="3% 5%" position="relative">
      {/* <Heading fontSize="6xl" color="gray.600" my={2}>
        Projects
      </Heading> */}

      <SimpleGrid
        columns={{ md: 1, lg: 3 }}
        spacing={10}
        position="relative"
        mt={10}
        p={10}
      >
        <ProjectCard
          slNo={1}
          title="web"
          sTitle="apps"
          color="red"
          icon={<IoGlobe />}
        />
        <ProjectCard
          slNo={2}
          title="pyt"
          sTitle="hon"
          color="purple"
          icon={<SiPython />}
        />
        <ProjectCard
          slNo={3}
          title="flut"
          color="teal"
          sTitle="ter"
          icon={<SiFlutter />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsPage;
