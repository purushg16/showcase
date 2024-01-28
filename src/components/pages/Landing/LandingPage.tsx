import {
  Box,
  Button,
  Flex,
  HStack,
  Highlight,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import AnimateMove from "../../motions/Move";
import Footer from "../../elements/Footer";
import profile from "../../../assets/profile.jpg";

const LandingPage = () => {
  return (
    <Box textAlign="left">
      <AnimateMove direction="y">
        <Flex flexDir="column" gap={5}>
          <Image boxSize={100} borderRadius={999} src={profile} />
          <Text fontSize="3xl" fontWeight={700}>
            <Text fontSize="md" fontWeight={500} opacity={0.8}>
              👋 Hey There,
            </Text>
            I'm Purush
            <Text fontSize="sm" fontWeight={300} color="gray">
              I write code & can provide extreme outcome.
            </Text>
          </Text>

          <Box>
            <Text fontSize="xl">
              <Highlight
                query={"MERN Stack"}
                styles={{ color: "teal" }}
                children={`An aspiring MERN Stack freelancer,  
                            who loves building cool things with code, 
                            placing the right colors at right place and 
                            providing the lovable product.`}
              />
            </Text>
          </Box>

          <Box>
            <HStack gap={7}>
              <Link to="about">
                <Button
                  pb={2}
                  variant="link"
                  leftIcon={
                    <Icon as={TbArrowRight} transform="rotate(320deg)" />
                  }
                  borderBottom="1px solid gray"
                  _hover={{ opacity: 0.8 }}
                >
                  About
                </Button>
              </Link>
              <Link to="about">
                <Button
                  pb={2}
                  variant="link"
                  leftIcon={
                    <Icon as={TbArrowRight} transform="rotate(320deg)" />
                  }
                  borderBottom="1px solid gray"
                  _hover={{ opacity: 0.8 }}
                >
                  Connect
                </Button>
              </Link>
            </HStack>
          </Box>
        </Flex>
      </AnimateMove>

      <Box my={20}>
        <Text fontSize="xl" mb={5}>
          Recent Posts
        </Text>
        <VStack alignItems="start" gap={5} mb={8}>
          <HStack columnGap={10}>
            <Text color="gray"> Oct 26, 2026 </Text>
            <Link to=""> Lorem ipsum dolor sit. </Link>
          </HStack>
          <HStack columnGap={10}>
            <Text color="gray"> Oct 26, 2026 </Text>

            <Link to=""> Lorem ipsum dolor sit. </Link>
          </HStack>
          <HStack columnGap={10}>
            <Text color="gray"> Oct 26, 2026 </Text>

            <Link to=""> Lorem ipsum dolor sit. </Link>
          </HStack>
        </VStack>

        <Link to="about">
          <Button
            pb={2}
            variant="link"
            leftIcon={<Icon as={TbArrowRight} transform="rotate(320deg)" />}
            borderBottom="1px solid gray"
            _hover={{ opacity: 0.8 }}
          >
            See All
          </Button>
        </Link>
      </Box>

      <Footer />
    </Box>
  );
};

export default LandingPage;
