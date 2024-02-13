import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import profile from "../../../assets/images/profile.jpg";
import { convertDate } from "../../generator/dateConvertor";

const BlogAuthor = ({ date }: { date: Date }) => {
  return (
    <HStack>
      <Image
        src={profile}
        alt="profile"
        borderRadius={999}
        boxSize={50}
        className="profile"
      />
      <Flex flexDir="column">
        <Text fontSize="md"> Purushothaman G </Text>
        <Text fontSize="md" color="gray">
          {convertDate(date)}
        </Text>
      </Flex>
    </HStack>
  );
};

export default BlogAuthor;
