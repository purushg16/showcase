import {
  Box,
  Divider,
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
    <Box my={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <ProjectDetails project={project} />
        </GridItem>

        <GridItem>
          <AnimateRotate>
            <Image src={project.image_url} alt="" w="100%" />
          </AnimateRotate>
        </GridItem>
      </SimpleGrid>

      <Divider my={10} />

      <Box>
        <Screenshots slug={project.slug} />
      </Box>

      <Divider my={10} />

      <Box>
        <DesignSystem designSystem={project.designSystem} />
      </Box>

      <Divider my={10} />
      <Box textAlign="center">
        <IconButton
          text="All Projects"
          route="works/web"
          icon={<TbArrowLeft />}
          left
        />
      </Box>
    </Box>
  );
};

export default SingleProject;
