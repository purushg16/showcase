import { Box, Text, SimpleGrid } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { TbArrowRight } from "react-icons/tb";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box marginY={5}>
      <Text my={1} as="dt" fontSize="lg" color="gray.400" fontWeight={400}>
        {title}
      </Text>
      <dd> {children} </dd>
    </Box>
  );
};

export default DefinitionItem;
