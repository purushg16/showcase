import { HStack, Button, SimpleGrid, Box, Text, Icon } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import DefinitionItem from "./DefinitionItem";
import Work from "../../entities/Work";
import AnimateMove from "../../motions/Move";
import UnderLineButtton from "../Button";

interface Props {
  work: Work;
}

const WorkDetails = ({ work }: Props) => {
  return (
    <Box>
      <AnimateMove direction="y">
        <Box mt={2}>
          <HStack spacing={3} color="gray.500">
            <Text fontSize="sm"> April, 2022 </Text>
            <Text fontSize="sm"> · </Text>
            <UnderLineButtton text="Visit Project" route={work.url} />
          </HStack>
        </Box>

        <Text fontSize="5xl" fontWeight={700}>
          {work.title}
        </Text>
        <Text fontSize="lg">{work.description}</Text>
      </AnimateMove>
    </Box>
  );
};

export default WorkDetails;
