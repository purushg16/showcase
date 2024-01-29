import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
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
    <Flex
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: 0, md: 8 }}
      rowGap={4}
    >
      <Box
        bg="url('https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        objectFit="cover"
        aspectRatio="16/9"
        w={{ sm: "100%", md: "40%" }}
        maxW={{ sm: "100%", md: "40%" }}
        borderRadius={9}
        overflow="hidden"
        _hover={{ opacity: 0.7 }}
        transition="all 0.7s"
      />
      <Box flex={1}>
        <Box>
          <Box mb={4}>
            <AnimateMove direction="y">
              <Text fontWeight={700} fontSize="md">
                {work.title}
              </Text>
            </AnimateMove>

            <AnimateMove>
              <Text fontSize="md" color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, alias nihil. Ducimus nemo culpa sequi aliquid facere
                obcaecati accusamus expedita!
              </Text>
            </AnimateMove>
          </Box>

          <AnimateMove direction="y">
            <Button borderRadius={9} onClick={() => navigate(`${work.slug}`)}>
              {" "}
              View{" "}
            </Button>
          </AnimateMove>
        </Box>

        {/* <Box w="min-content">
            <AnimateMove direction="y">
              <Text fontWeight={700}>
                {index < 9 && 0}
                {index}
              </Text>
            </AnimateMove>
            <Text fontWeight={700} color="gray">
              {index < 9 && 0}
              {count}
            </Text>
          </Box> */}
      </Box>
    </Flex>
  );
};

export default WorkCard;
