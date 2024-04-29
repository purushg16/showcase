import {
  Box,
  Divider,
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
import ContactForm from "../../elements/ContactForm";

const BlogsPage = () => {
  return (
    <Flex gap={12} flexDir="column">
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
      <Divider w="40%" mx="auto" my={4} />

      <AnimateMove direction="y" delay={0.2 * (blogs.length + 1)}>
        <ContactForm />
      </AnimateMove>
    </Flex>
  );
};

export default BlogsPage;
