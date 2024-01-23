import { Box, SimpleGrid } from "@chakra-ui/react";
import SkillCard from "../../elements/Cards/SkillCard";
import { langugageFilterType } from "./langugageFilterType";
import languages from "../../data/languages";

interface Props {
  filter: langugageFilterType;
}

const SkillsGrid = ({ filter }: Props) => {
  return (
    <Box>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={5}>
        {languages.results.map((lang) => (
          <SkillCard skill={lang.name} score={lang.score} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsGrid;
