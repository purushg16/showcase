import {
  Box,
  Button,
  GridItem,
  Image,
  SimpleGrid,
  IconButton,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import works from "../../data/works";
import DefinitionItem from "../../elements/DefinitionItem";
import { TbArrowRight } from "react-icons/tb";
import AnimateRotate from "../../motions/Rotate";
import { SiGithub } from "react-icons/si";

const SingleProject = () => {
  const title = useParams().title;
  const project = works.results.data.find((d) => d.slug === title);

  if (!project) return <Text> No data found! </Text>;
  return (
    <Box my={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
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
        </GridItem>

        <GridItem>
          <AnimateRotate>
            <Image src={project.image_url} alt="" w="100%" />
          </AnimateRotate>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default SingleProject;
