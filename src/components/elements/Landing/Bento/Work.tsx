import {
  GridItem,
  HStack,
  Heading,
  Button,
  VStack,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import img from "../../../../assets/images/macdasy.png";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={6}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="base"
      borderRadius={10}
      minH={200}
      pos="relative"
      overflow="clip"
    >
      <HStack w="100%" justify="space-between">
        <VStack gap={0} align="start">
          <Text fontSize="xs"> Established* & Managing </Text>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            as={Link}
            to="https://macdasy.in/"
            target="_blank"
          >
            Macdasy
            <Icon as={TbArrowUpRight} pt={1} />
          </Heading>
        </VStack>
      </HStack>
      <Image
        src={img}
        w="60%"
        pos="absolute"
        bottom={-36}
        right={-20}
        opacity={0.4}
      />
    </GridItem>
  );
};

export default Work;
