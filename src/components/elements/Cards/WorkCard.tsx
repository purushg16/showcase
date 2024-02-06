import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Work from "../../entities/Work";
import AnimateMove from "../../motions/Move";

interface Props {
  work: Work;
}

const WorkCard = ({ work }: Props) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: 0, md: 8 }}
      rowGap={4}
    >
      <Box
        p={2}
        w={{ sm: "100%", md: "40%" }}
        maxW={{ sm: "100%", md: "40%" }}
        display="flex"
        justifyContent="center"
        objectFit="cover"
        aspectRatio="16/9"
        borderRadius={9}
        overflow="hidden"
        _hover={{ opacity: 0.7 }}
        transition="all 0.7s"
        // bg="gray.700"
        bg={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        <Image
          src={work.logo}
          alt={work.title}
          loading="lazy"
          borderRadius={9}
        />
      </Box>

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
                {work.breif}
              </Text>
            </AnimateMove>
          </Box>

          <AnimateMove direction="y">
            <Button borderRadius={9} onClick={() => navigate(`${work.slug}`)}>
              View
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
