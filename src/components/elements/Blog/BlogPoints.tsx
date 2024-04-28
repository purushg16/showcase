import { Box, Text } from "@chakra-ui/react";
import BlogPoints from "../../entities/BlogPoints";

const BlogPointsSection = (BlogPointsInterface: BlogPoints) => {
  return (
    <Box my={5}>
      <Text as="dt" fontWeight={500} mb={2}>
        {BlogPointsInterface.heading}
      </Text>
      {BlogPointsInterface.points.map((point, i) => (
        <Text as="dd" key={i} color="gray" py={2}>
          - {point}
        </Text>
      ))}
    </Box>
  );
};

export default BlogPointsSection;
