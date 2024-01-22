import { HStack, Button, SimpleGrid, Box, Text } from "@chakra-ui/react";
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
    <>
      <Text fontSize="4xl"> {project.title} </Text>
      <Text> {project.description} </Text>

      <Box mt={2}>
        <HStack gap={3}>
          <Link to={project.git} target="_blank">
            <Button
              rightIcon={<SiGithub />}
              colorScheme="blue"
              variant="outline"
            >
              Source
            </Button>
          </Link>

          <Link to={project.url} target="_blank">
            <Button
              rightIcon={<TbArrowRight />}
              colorScheme="blue"
              variant="solid"
            >
              Visit
            </Button>
          </Link>
        </HStack>
      </Box>

      <SimpleGrid columns={2} marginY={10} rowGap={10}>
        <DefinitionItem
          title="Details"
          children={
            <Text>
              Duration: {project.duration} {project.durationUnit}
            </Text>
          }
        />

        <DefinitionItem
          title="Languages"
          children={project.language.map((language) => (
            <Text key={language}>{language}</Text>
          ))}
        />
        <DefinitionItem
          title="Deployed In"
          children={project.platform.map((platform) => (
            <Text key={platform}>{platform}</Text>
          ))}
        />

        <DefinitionItem
          title="Tools"
          children={project.tools.map((tool) => (
            <Text key={tool}>{tool}</Text>
          ))}
        />
      </SimpleGrid>
    </>
  );
};

export default ProjectDetails;
