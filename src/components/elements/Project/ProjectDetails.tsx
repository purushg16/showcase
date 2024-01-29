import { HStack, Button, SimpleGrid, Box, Text, Icon } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import DefinitionItem from "./DefinitionItem";
import Project from "../../entities/Project";

interface Props {
  project: Project;
}

const ProjectDetails = ({ project }: Props) => {
  return (
    <Box>
      <Box mt={2}>
        <HStack spacing={3}>
          <Text fontSize="sm"> April, 2022 </Text>
          <Text fontSize="sm"> · </Text>
          <Link to={project.url} target="_blank">
            <Text fontSize="sm">
              Visit Project
              <Icon as={TbArrowRight} ml={1} transform="rotate(320deg)" />
            </Text>
          </Link>
        </HStack>
      </Box>

      <Text fontSize="5xl" fontWeight={700}>
        {project.title}
      </Text>
      <Text color="gray.600" fontSize="xl">
        {project.description}
      </Text>

      {/* <SimpleGrid columns={1} marginY={10} rowGap={1}>
        <DefinitionItem
          title="Tags"
          children={project.tags.map((tag) => (
            <Text color="gray" key={tag}>
              {tag}
            </Text>
          ))}
        />
        <DefinitionItem
          title="Platforms"
          children={project.platform.map((platform) => (
            <Text color="gray" key={platform}>
              {platform}
            </Text>
          ))}
        />
      </SimpleGrid> */}
    </Box>
  );
};

export default ProjectDetails;
