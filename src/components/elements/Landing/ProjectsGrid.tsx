import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import works from "../../data/works";
import { Link } from "react-router-dom";

const ProjectsGrid = () => {
  return (
    <SimpleGrid columns={2} spacing={4} w="100%">
      {works.results.data.map((work) => (
        <Link to={`/works/${work.slug}`}>
          <GridItem
            key={work.id}
            borderRadius={10}
            border="1px solid"
            borderColor="whiteAlpha.200"
            aspectRatio="3/2"
            w="100%"
            bgImg={work.screenshots[0]}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.7s"
            _hover={{ opacity: 0.6 }}
            cursor="pointer"
          />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
