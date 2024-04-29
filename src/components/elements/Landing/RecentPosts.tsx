import { VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";
import blogs from "../../data/blogs";

const RecentPosts = () => {
  return (
    <VStack alignItems="start" gap={5} mb={8}>
      {blogs.map((blog) => (
        <PostCard key={blog.id} blog={blog} />
      ))}
    </VStack>
  );
};

export default RecentPosts;
