import { Box, Image, Text } from "@chakra-ui/react";
import ContactLinksGrid from "../../elements/ContactLinksGrid";
import AnimateMove from "../../motions/Move";

const ConnectPage = () => {
  return (
    <Box textAlign="center" py={16}>
      <AnimateMove delay={0.2} direction="y">
        <Box id="card-img-cont">
          <Image
            m="auto"
            boxSize={100}
            borderRadius={999}
            src="public/images/profile.jpg"
          />
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.4} direction="y">
        <Box my={4}>
          <Text fontSize="3xl" fontWeight={700}>
            Purush G
          </Text>
          <Text fontSize="md" fontWeight={300} color="gray" maxW={400} m="auto">
            I write code & can provide extreme outcome. Besides, I do freelaning
            and could work at any time schedule according to the projects.
          </Text>
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.6} direction="y">
        <Box my={16}>
          <ContactLinksGrid />
        </Box>
      </AnimateMove>
    </Box>
  );
};

export default ConnectPage;