import { HStack, Button, SimpleGrid, Box, Text, Icon } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import DefinitionItem from "./DefinitionItem";
import Project from "../../entities/Project";
import AnimateMove from "../../motions/Move";

interface Props {
  project: Project;
}

const ProjectDetails = ({ project }: Props) => {
  return (
    <Box>
      <AnimateMove direction="y">
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
      </AnimateMove>
    </Box>
  );
};

export default ProjectDetails;
