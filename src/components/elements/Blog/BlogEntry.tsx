import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Blog } from "../../entities/Blog";

interface Props {
  blog: Blog;
}

const BlogEntry = ({ blog }: Props) => {
  const date = `${blog.createdAt.getDate()} - ${
    blog.createdAt.getMonth() < 9 ? "0" : ""
  }${blog.createdAt.getMonth()} - ${blog.createdAt.getFullYear()}`;

  return (
    <Flex
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      gap={{ base: 4, md: 6 }}
      pb={4}
    >
      <Image src={blog.thumbnail} alt="" w={200} borderRadius={10} />
      <Box flex={1}>
        <Text color="gray" fontSize="sm">
          {date}
        </Text>
        <Link to={`/blogs/${blog.id}`}>
          <Text
            fontSize="lg"
            fontWeight={600}
            _hover={{ opacity: 0.7 }}
            transition="all 0.7s"
            width="fit-content"
          >
            {blog.title}
          </Text>
        </Link>

        <Link to={`/blogs/${blog.id}`} target="_blank">
          <Button
            mt={4}
            borderRadius={0}
            pb={2}
            variant="link"
            rightIcon={<Icon as={TbArrowRight} transform="rotate(320deg)" />}
            borderBottom="1px solid gray"
            opacity={0.7}
            _hover={{ opacity: 1 }}
          >
            Read more
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default BlogEntry;
