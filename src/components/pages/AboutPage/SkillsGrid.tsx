import { Box, SimpleGrid } from "@chakra-ui/react";
import SkillCard from "../../elements/Cards/SkillCard";
import { SiReact } from "react-icons/si";
import { langugageFilterType } from "./langugageFilterType";

interface Props {
  filter: langugageFilterType;
}

const SkillsGrid = ({ filter }: Props) => {
  return (
    <Box>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={5}>
        <SkillCard skill="React" score={90} icon={SiReact} />
        <SkillCard skill="React" score={90} icon={SiReact} />
        <SkillCard skill="React" score={90} icon={SiReact} />
      </SimpleGrid>
    </Box>
  );
};

export default SkillsGrid;
