import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import AnimateMove from "../../motions/Move";
import { TbArrowRight } from "react-icons/tb";
import blogs from "../../data/blogs";
import BlogEntry from "../../elements/Blog/BlogEntry";

const BlogsPage = () => {
  return (
    <Flex gap={20} flexDir="column">
      <AnimateMove direction="y">
        <Box>
          <Text fontSize="3xl" fontWeight={700}>
            Blogs
          </Text>
          <Text color="gray"> I've done so far.. </Text>
        </Box>
      </AnimateMove>

      {blogs.map((blog, i) => (
        <AnimateMove delay={0.2 * (i + 1)} direction="y" key={i}>
          <BlogEntry key={blog.id} blog={blog} />
        </AnimateMove>
      ))}

      {/* <AnimateMove>
        <Text textAlign="center">
          There are no blogs I have published as of now! Soon all will reach
          you!
        </Text>
      </AnimateMove> */}

      <AnimateMove direction="y" delay={0.2 * (blogs.length + 1)}>
        <Box textAlign="center" px={{ base: 4, md: 8 }}>
          <Text> Contact Me </Text>
          <Text my={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odit
            natus id itaque tenetur sed quos at, ut animi cupiditate.
          </Text>

          <HStack justifyContent="center" gap={4}>
            <Icon as={SiGithub} />
            <Icon as={SiInstagram} />
            <Icon as={SiGmail} />
          </HStack>
        </Box>
      </AnimateMove>
    </Flex>
  );
};

export default BlogsPage;
