import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import AnimateScale from "../motions/Scale";
import { IconButton } from "./Button";

interface Props {
  title: string;
  icon: IconType;
  color: string;
  route: string;
}

const ProjectCard = ({ title, icon, color, route }: Props) => {
  const navigate = useNavigate();

  return (
    <AnimateScale>
      <Box
        onClick={() => {
          navigate(`/${route}`);
        }}
        cursor="pointer"
        height={340}
        border="1px solid"
        borderColor={color}
        p={5}
        boxShadow="1px 1px 20px 1px #cdcdcd"
        position="relative"
        overflow="hidden"
        transition="all 0.7s"
        _hover={{
          boxShadow: "1px 1px 20px 10px #cdcdcd",
        }}
      >
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Image
            color="#c6d1ff"
            as={icon}
            position="absolute"
            right={-100}
            bottom={-50}
            boxSize={300}
          />

          <Box height={200}>
            <Text fontSize="4xl" fontWeight={500}>
              {title}
            </Text>
            <Text
              px={2}
              color="blue.900"
              w="max-content"
              fontSize="sm"
              opacity={0.5}
            >
              20 Projects
            </Text>
          </Box>
          <Box>
            <IconButton
              text=""
              icon={<TbArrowRight style={{ transform: "rotate(320deg)" }} />}
              route={route}
            />
          </Box>
        </Flex>
      </Box>
    </AnimateScale>
  );
};

export default ProjectCard;
