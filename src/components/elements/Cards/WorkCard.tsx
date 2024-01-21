import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Work from "../../entities/Work";

interface Props {
  work: Work;
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
          <Text fontWeight={700}>
            {index < 9 && 0}
            {index}
          </Text>
          <Text fontWeight={700} opacity={0.5}>
            {index < 9 && 0}
            {count}
          </Text>
        </Box>
        <Box>
          <Text textAlign="right">
            <Icon as={TbArrowRight} transform="rotate(320deg)" />
          </Text>
          <Text fontSize="5xl" textAlign="right">
            {work.title}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkCard;
