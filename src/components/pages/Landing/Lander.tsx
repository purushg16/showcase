import { Box, Highlight, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { IconButton } from "../../elements/Button";

const Lander = () => {
  return (
    <Box textAlign="left" width="70%">
      <Text fontSize="xl"> 👋 Hey There, I'm Purush </Text> <br />
      <Text fontSize="3xl">
        <Highlight
          query={"MERN Stack"}
          styles={{ color: "blue" }}
          children="An aspiring MERN Stack freelancer, placing the right colors at right place."
        />
      </Text>
      <Text my={5}>Loved to provide what you love 💙.</Text>
      <IconButton route="works" text="works" icon={<TbArrowRight />} />
    </Box>
  );
};

export default Lander;
