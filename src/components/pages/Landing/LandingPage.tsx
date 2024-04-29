import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import Footer from "../../elements/Footer";
import RecentPosts from "../../elements/Landing/RecentPosts";
import AnimateMove from "../../motions/Move";
import HeroSection from "../../elements/Landing/HeroSection";
import LandingBento from "../../elements/Landing/LandingBento";
import Head from "../../elements/Landing/Bento/Head";

const LandingPage = () => {
  return (
    <Flex flexDir="column" gap={24} textAlign="left">
      <AnimateMove direction="y">
        <Flex flexDir="column" gap={8}>
          <HeroSection />

          {/* <Box>
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

              <Link
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
              </Link>
            </Flex>
          </Box> */}
        </Flex>
      </AnimateMove>

      <AnimateMove>
        <LandingBento />
      </AnimateMove>

      <AnimateMove>
        <VStack align="start" gap={4}>
          <Heading fontSize="xl">Recent Posts</Heading>
          <Text mb={4} opacity={0.7}>
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
      <Footer />
    </Flex>
  );
};

export default LandingPage;
