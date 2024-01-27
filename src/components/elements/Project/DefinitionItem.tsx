import { Box, Text, HStack } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box marginY={3}>
      <Text my={2}> {title} </Text>
      <HStack>{children}</HStack>
    </Box>
  );
};

export default DefinitionItem;
