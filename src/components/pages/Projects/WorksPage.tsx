import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import works from "../../data/works";
import WorkCard from "../../elements/Cards/WorkCard";
import AnimateMove from "../../motions/Move";
import ContactForm from "../../elements/ContactForm";

const WorksPage = () => {
  return (
    <Box>
      <AnimateMove direction="y">
        <Text fontSize="3xl" fontWeight={700} textTransform="capitalize">
          Works
        </Text>

        <Text color="gray">Here are some of the projects I've worked on.</Text>
      </AnimateMove>

      <AnimateMove direction="y">
        <SimpleGrid my={20} spacing={16}>
          {works.results.data.map((work, index) => (
            <AnimateMove key={index} delay={0.2 * (index + 1)}>
              <WorkCard work={work} />
            </AnimateMove>
          ))}
        </SimpleGrid>
      </AnimateMove>

      <Divider my={10} w="40%" mx="auto" />
      <AnimateMove direction="y" delay={0.2 * (works.results.data.length + 1)}>
        <ContactForm />
      </AnimateMove>
    </Box>
  );
};

export default WorksPage;
