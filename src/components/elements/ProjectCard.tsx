import { ReactIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import AnimateMove from "../motions/Move";
import { IconType } from "react-icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  sTitle?: string;
  icon: ReactNode;
  slNo: number;
  color: string;
}

const ProjectCard = ({ title, icon, sTitle, slNo, color }: Props) => {
  return (
    <AnimateMove direction="y">
      <Box
        background={`${color}.400`}
        overflow="hidden"
        position="relative"
        padding={10}
        height={300}
        cursor="pointer"
        borderRadius={0}
        transition="all 0.5s"
        _hover={{ color: "black" }}
      >
        <Flex direction="column" height="100%">
          <Box>
            <Image
              as={Icon}
              boxSize={300}
              position="absolute"
              right={-150}
              top={-10}
              opacity={0.1}
            >
              {icon}
            </Image>
            <Heading color="gray.300"> 0{slNo} </Heading>
            <Divider />
          </Box>
          <Spacer />
          <Box mt={10}>
            <Heading as={"h3"}>
              {title} <br />
              {!!sTitle && sTitle}
            </Heading>
          </Box>
        </Flex>
      </Box>
    </AnimateMove>
  );
};

export default ProjectCard;
