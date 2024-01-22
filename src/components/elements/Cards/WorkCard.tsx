import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Project from "../../entities/Project";
import AnimateMove from "../../motions/Move";
import AnimateScale from "../../motions/Scale";

interface Props {
  work: Project;
  index: number;
  count: number;
}

const WorkCard = ({ work, index, count }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`${work.slug}`)}
      border="1px solid #a1a1a1"
      p={5}
      minHeight={300}
      cursor="pointer"
      transition="all 0.7s"
      _hover={{ bg: "gray.100" }}
    >
      <Flex flexDirection="column" height="100%" justifyContent="space-between">
        <Box>
          <AnimateMove direction="y">
            <Text fontWeight={700}>
              {index < 9 && 0}
              {index}
            </Text>
          </AnimateMove>
          <Text fontWeight={700} opacity={0.5}>
            {index < 9 && 0}
            {count}
          </Text>
        </Box>
        <Box>
          <AnimateScale>
            <Text textAlign="right">
              <Icon as={TbArrowRight} transform="rotate(320deg)" />
            </Text>
          </AnimateScale>
          <AnimateMove direction="y">
            <Text fontSize="5xl" textAlign="right">
              {work.title}
            </Text>
          </AnimateMove>
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkCard;
