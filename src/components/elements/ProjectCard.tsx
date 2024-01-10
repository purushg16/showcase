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
  desc: string;
  icon: ReactNode;
}

const ProjectCard = ({ title, desc, icon }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <AnimateMove direction="y">
      <Box
        background={colorMode}
        overflow="hidden"
        position="relative"
        padding={10}
        height={300}
        cursor="pointer"
        borderRadius={0}
        transition="all 0.5s"
        boxShadow="0px 0px 0px 1px black"
        _hover={{ boxShadow: "0px 0px 40px 1px black", color: "red.200" }}
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
            <Heading mb={3} as={"h6"}>
              {title}
            </Heading>
            <Divider />
          </Box>
          <Spacer />
          <Box mt={10}>{desc}</Box>
        </Flex>
      </Box>
    </AnimateMove>
  );
};

export default ProjectCard;
