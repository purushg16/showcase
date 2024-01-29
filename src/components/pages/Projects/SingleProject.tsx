import {
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbArrowLeft } from "react-icons/tb";
import { useParams } from "react-router-dom";
import works from "../../data/works";
import { IconButton } from "../../elements/Button";
import DesignSystem from "../../elements/Project/DesignSystem";
import ProjectDetails from "../../elements/Project/ProjectDetails";
import AnimateRotate from "../../motions/Rotate";
import Screenshots from "./Screenshots";

const SingleProject = () => {
  const title = useParams().title;
  const project = works.results.data.find((d) => d.slug === title);

  if (!project) return <Text> No data found! </Text>;
  return (
    <Flex flexDir="column" gap={16}>
      <ProjectDetails project={project} />

      <AnimateRotate>
        <Image src={project.image_url} alt="" w="100%" loading="lazy" />
      </AnimateRotate>

      <Box>
        <Screenshots
          screenshots={project.screenshots}
          desc={project.screenshostDesc}
        />
      </Box>

      <Box>
        <Divider my={10} w={400} mx="auto" />

        <DesignSystem designSystem={project.designSystem} tags={project.tags} />
      </Box>

      <Box textAlign="center">
        <Divider my={10} w={400} mx="auto" />

        <IconButton
          text="All Projects"
          route="works"
          icon={<TbArrowLeft />}
          left
        />
      </Box>
    </Flex>
  );
};

export default SingleProject;
