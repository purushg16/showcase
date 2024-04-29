import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { convertDate } from "../../generator/dateConvertor";
import { Blog } from "../../entities/Blog";

const PostCard = ({ blog }: { blog: Blog }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 8 }}>
      <Box
        w={100}
        aspectRatio="4/3"
        bgImg={blog.thumbnail}
        bgSize="cover"
        bgPos="center"
        borderRadius={10}
      />
      <Stack direction="column" gap={0} columnGap={8}>
        <Text color="gray" fontSize="xs">
          {convertDate(blog.createdAt)}{" "}
        </Text>
        <Link to={`blogs/${blog.id}`}>
          <Text fontWeight={600}> {blog.title} </Text>
        </Link>
      </Stack>
    </Stack>
  );
};

export default PostCard;
