import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { IoArrowRedo, IoGlobe } from "react-icons/io5";
import { SiFlutter, SiPython } from "react-icons/si";
import ProjectCard from "../../elements/ProjectCard";
import AnimateMove from "../../motions/Move";

const ProjectsPage = () => {
  return (
    <Box height="100%" padding="3% 5%">
      <Heading as={"h5"}> Projects </Heading>

      <Box my={3} padding={10}>
        <AnimateMove>
          <Text textAlign="center" width="70%" margin="auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            impedit
            <Divider my={2} />
            {/* <TIconButton text="See All" icon={IoArrowRedo} color="red" /> */}
          </Text>
        </AnimateMove>

        <SimpleGrid columns={{ md: 1, lg: 3 }} spacing={10} mt={20}>
          <ProjectCard
            title="web"
            desc={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ea."
            }
            icon={<IoGlobe />}
          />
          <ProjectCard
            title="python"
            desc={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ea."
            }
            icon={<SiPython />}
          />
          <ProjectCard
            title="flutter"
            desc={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ea."
            }
            icon={<SiFlutter />}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
