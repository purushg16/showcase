import { Box, Highlight, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { IconButton } from "../../elements/Button";
import AnimateMove from "../../motions/Move";
import Footer from "../../elements/Footer";

const Lander = () => {
  return (
    <Box textAlign="left">
      <AnimateMove>
        <Text fontSize="xl" fontWeight={500} opacity={0.8}>
          👋 Hey There, I'm Purush
        </Text>
      </AnimateMove>
      <br />
      <AnimateMove direction="y">
        <Text fontSize="3xl">
          <Highlight
            query={"MERN Stack"}
            styles={{ color: "blue" }}
            children="An aspiring MERN Stack freelancer, placing the right colors at right place."
          />
        </Text>

        <Text my={5}>Loved to provide what you love 💙.</Text>

        <IconButton route="works" text="Works" icon={<TbArrowRight />} />
      </AnimateMove>

      <Footer />
    </Box>
  );
};

export default Lander;
