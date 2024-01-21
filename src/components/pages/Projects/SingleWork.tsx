import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import WorkCard from "../../elements/Cards/WorkCard";
import works from "../../data/works";

const SingleWork = () => {
  return (
    <Box paddingY={{ sm: 20, md: 5 }}>
      <Box>
        <Text fontSize="4xl"> Web Works </Text>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          my={5}
          pb={7}
          spacing={7}
          borderBottom="1px solid #a2a2a2"
        >
          <Box width="max-content">
            <Text fontSize="lg"> Total Projects </Text>
            <Text color="gray"> 20 </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize="lg"> Description </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              minima quisquam corrupti aut totam ullam
            </Text>
          </Box>

          <Box flex={1}>
            <Text fontSize="lg"> Toolkits </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              minima quisquam corrupti aut totam ullam
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ sm: 1, md: 2 }} my={10} spacing={7}>
          {works.results.map((work, index) => (
            <WorkCard work={work} index={index + 1} count={works.count} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SingleWork;
