import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import ContactLinksGrid from "../../elements/ContactLinksGrid";
import AnimateMove from "../../motions/Move";
import profile from "../../../assets/images/profile.jpg";
import { TbArrowDown } from "react-icons/tb";
import { Link } from "react-router-dom";
import resume from "../../../assets/Resume.pdf";
import Footer from "../../elements/Footer";

const ConnectPage = () => {
  return (
    <Box textAlign="center" py={16}>
      <AnimateMove delay={0.2} direction="y">
        <Box id="card-img-cont">
          <Image m="auto" boxSize={100} borderRadius={999} src={profile} />
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.4} direction="y">
        <Box my={4}>
          <Text fontSize="3xl" fontWeight={700}>
            Purush G
          </Text>
          <Text
            fontSize="md"
            fontWeight={300}
            color="gray"
            maxW={400}
            m="auto"
            mb={4}
          >
            I write code & can provide extreme outcome. Besides, I do freelaning
            and could work at any time schedule according to the projects.
          </Text>

          <Link to={resume} download="Resume - Purushothaman G" target="_blank">
            <Button
              borderRadius={9}
              rightIcon={<Icon as={TbArrowDown} />}
              _hover={{ opacity: 0.8 }}
            >
              Resume
            </Button>
          </Link>
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.6} direction="y">
        <Box my={16}>
          <ContactLinksGrid />
        </Box>
      </AnimateMove>
      <Footer />
    </Box>
  );
};

export default ConnectPage;
