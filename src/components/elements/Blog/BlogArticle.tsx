import { Box, Image, Text } from "@chakra-ui/react";
import ImageContainer from "../ImageContainer";

interface Props {
  title: string;
  image?: string;
  credits?: string;
  article: string;
}

const BlogArticle = ({ title, article, image, credits }: Props) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight={700} mb={8}>
        {title}
      </Text>
      {image && (
        <Box mb={8}>
          <ImageContainer margin={2}>
            <Image src={image} alt="" loading="lazy" />
          </ImageContainer>
          {credits && (
            <Text
              color="gray"
              w="70%"
              textAlign="center"
              m="auto"
              fontSize="sm"
            >
              Credits: {credits}
            </Text>
          )}
        </Box>
      )}

      <Text color="gray">{article}</Text>
    </Box>
  );
};

export default BlogArticle;
