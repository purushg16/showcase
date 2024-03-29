import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import BlogAuthor from "../../elements/Blog/BlogAuthor";
import BlogArticle from "../../elements/Blog/BlogArticle";
import AnimateMove from "../../motions/Move";

const SingleBlogPage = () => {
  const id = useParams().id;

  const blog = blogs.find((b) => b.id === id);

  return (
    <Flex gap={8} flexDir="column">
      <AnimateMove direction="y" delay={0.2}>
        <Box>
          <Text fontSize="4xl" fontWeight={700}>
            {blog?.title}
          </Text>
          <Text fontSize="md" mt={4} color="gray">
            {blog?.desc}
          </Text>
        </Box>
      </AnimateMove>

      <AnimateMove direction="y" delay={0.4}>
        <BlogAuthor date={blog?.createdAt!} />
      </AnimateMove>

      <AnimateMove direction="y" delay={0.6}>
        <Image src={blog?.imgUrls[0]} alt="" />
      </AnimateMove>

      <AnimateMove direction="y" delay={0.6}>
        <Text color="gray">{blog?.introduction}</Text>
      </AnimateMove>

      {blog?.subtitles.map((title, i) => (
        <AnimateMove direction="y" delay={0.6}>
          <BlogArticle
            title={title}
            article={blog.articles[i]}
            image={blog.imgUrls[i]}
            credits={blog.imgCredits[i]}
          />
        </AnimateMove>
      ))}
      <AnimateMove direction="y" delay={0.6}>
        <Box>
          <Text fontSize="2xl" fontWeight={700} mb={4}>
            Conclusion
          </Text>
          <Text color="gray">{blog?.conclusion}</Text>
        </Box>
      </AnimateMove>
    </Flex>
  );
};

export default SingleBlogPage;
