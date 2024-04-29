import { GridItem, Button, Text, Image } from "@chakra-ui/react";
import { TbArrowDown } from "react-icons/tb";
import img from "../../../../assets/bubbleBoy.png";

const Resume = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 3, md: 2 }}
      p={4}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius={10}
      pos="relative"
      overflow="hidden"
    >
      <Text mb={4}> Find my resume here. </Text>
      <Button size="sm" rightIcon={<TbArrowDown />}>
        Resume
      </Button>
      <Image
        zIndex={-1}
        src={img}
        alt=""
        pos="absolute"
        bottom={-5}
        right={-20}
        w={150}
        opacity={0.5}
      />
    </GridItem>
  );
};

export default Resume;
