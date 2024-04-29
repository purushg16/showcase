import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbArrowDown, TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import AnimateMove from "../../motions/Move";
import Footer from "../../elements/Footer";
import profile from "../../../assets/images/profile.jpg";
import resume from "../../../assets/Resume.pdf";
import PostCard from "../../elements/PostCard";
import RecentPosts from "../../elements/RecentPosts";
import LandingBento from "../../elements/LandingBento";

const LandingPage = () => {
  return (
    <Box textAlign="left">
      <AnimateMove direction="y">
        <Flex flexDir="column" gap={4}>
          <Box id="card-img-cont">
            <Image
              boxSize={100}
              borderRadius={999}
              src={profile}
              className="profile"
            />
          </Box>
          <Text fontSize="3xl" fontWeight={700}>
            <Text fontSize="md" fontWeight={500} opacity={0.8}>
              👋 Hey There,
            </Text>
            I'm Purush
            <Text fontSize="md" fontWeight={300} color="gray">
              I write code & can provide extreme outcome.
            </Text>
          </Text>

          <Box>
            <Text fontSize="md">
              <Highlight
                query={"MERN Stack"}
                styles={{ color: "teal" }}
                children={`An aspiring MERN Stack freelancer,  
                            who loves building cool things with code, 
                            placing the right colors at right place and 
                            providing the lovable product `}
              />
              and have developed many{" "}
              <Link to="works" style={{ borderBottom: "1px solid" }}>
                web-applications
              </Link>{" "}
              with{" "}
              <Link
                to="https://macdasys.netlify.app/"
                target="_blank"
                style={{ borderBottom: "1px solid" }}
              >
                Macdasy
              </Link>
              .
            </Text>
          </Box>

          <Box>
            <Flex align="center" gap={8} flexWrap="wrap">
              <Link to="about">
                <Button
                  borderRadius={0}
                  pb={2}
                  variant="link"
                  rightIcon={
                    <Icon as={TbArrowRight} transform="rotate(320deg)" />
                  }
                  borderBottom="1px solid gray"
                  _hover={{ opacity: 0.8 }}
                >
                  About
                </Button>
              </Link>
              <Link to="connect">
                <Button
                  borderRadius={0}
                  pb={2}
                  variant="link"
                  rightIcon={
                    <Icon as={TbArrowRight} transform="rotate(320deg)" />
                  }
                  borderBottom="1px solid gray"
                  _hover={{ opacity: 0.8 }}
                >
                  Connect
                </Button>
              </Link>

              {/* <Link
                to={resume}
                download="Resume - Purushothaman G"
                target="_blank"
              >
                <Button
                  borderRadius={9}
                  rightIcon={<Icon as={TbArrowDown} />}
                  _hover={{ opacity: 0.8 }}
                >
                  Resume
                </Button>
              </Link> */}
            </Flex>
          </Box>
        </Flex>
      </AnimateMove>

      <Divider my={10} w="40%" mx="auto" />

      <AnimateMove>
        <VStack align="start" gap={4}>
          <Heading fontSize="lg">Recent Posts</Heading>
          <Text mb={4}>
            I occasionally write about programming, productivity, and more.
            <br />
            Check me out and support if you like.
          </Text>
          <RecentPosts />
          <Link to="blogs">
            <Button
              pb={2}
              borderRadius={0}
              variant="link"
              leftIcon={<Icon as={TbArrowRight} transform="rotate(320deg)" />}
              borderBottom="1px solid gray"
              _hover={{ opacity: 0.8 }}
            >
              See All
            </Button>
          </Link>
        </VStack>
      </AnimateMove>

      <Divider my={10} w="40%" mx="auto" />

      <Footer />
    </Box>
  );
};

export default LandingPage;
