import {
  GridItem,
  HStack,
  VStack,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProjectsGrid from "../ProjectsGrid";

const Projects = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 6, md: 4 }}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius={10}
      boxShadow="base"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        align="start"
        gap={12}
        h="100%"
      >
        <VStack align="start" justify="space-between" h="100%">
          <Text fontSize="md" opacity={0.7}>
            {" "}
            My Projects
          </Text>
          <Link to="works">
            <Button size="sm" rightIcon={<TbArrowUpRight />}>
              View All
            </Button>
          </Link>
        </VStack>
        <ProjectsGrid />
      </Stack>
    </GridItem>
  );
};

export default Projects;
