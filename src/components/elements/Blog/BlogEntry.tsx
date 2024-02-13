import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Blog } from "../../entities/Blog";
import { Link } from "react-router-dom";
import { IconButton, LinkButton, NavButton } from "../Button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { TbArrowBarToRight, TbArrowRight } from "react-icons/tb";

interface Props {
  blog: Blog;
}

const BlogEntry = ({ blog }: Props) => {
  const date = `${blog.createdAt.getDate()} - ${
    blog.createdAt.getMonth() < 9 ? "0" : ""
  }${blog.createdAt.getMonth()} - ${blog.createdAt.getFullYear()}`;

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.700"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      gap={{ sm: 4, md: 6 }}
      pb={4}
    >
      <Image src={blog.imgUrls[0]} alt="" w={200} borderRadius={10} />
      <Box flex={1}>
        <Text color="gray">{date}</Text>
        <Link to={`/blogs/${blog.id}`}>
          <Text
            fontWeight={500}
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
