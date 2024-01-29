import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import AnimateMove from "../../motions/Move";
import { Link } from "react-router-dom";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";

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

      <AnimateMove direction="y">
        <SimpleGrid spacing={12}>
          <Flex gap={8}>
            <Box
              bg="url('https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              objectFit="cover"
              aspectRatio="1/1"
              w="15%"
              maxW={{ sm: "100%", md: "40%" }}
              borderRadius={9}
              overflow="hidden"
              _hover={{ opacity: 0.7 }}
              transition="all 0.7s"
            />
            <Box flex={1}>
              <Text color="gray" fontSize="sm">
                Oct 26, 2026
              </Text>
              <Link to="">
                <Text fontWeight={500} _hover={{ textDecor: "underline" }}>
                  Lorem ipsum dolor sit.
                  <Icon as={TbArrowRight} ml={1} transform="rotate(320deg)" />
                </Text>
              </Link>
            </Box>
          </Flex>
          <Flex gap={8}>
            <Box
              bg="url('https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              objectFit="cover"
              aspectRatio="1/1"
              w="15%"
              maxW={{ sm: "100%", md: "40%" }}
              borderRadius={9}
              overflow="hidden"
              _hover={{ opacity: 0.7 }}
              transition="all 0.7s"
            />
            <Box flex={1}>
              <Text color="gray" fontSize="sm">
                Oct 26, 2026
              </Text>
              <Link to="">
                <Text fontWeight={500} _hover={{ textDecor: "underline" }}>
                  Lorem ipsum dolor sit.
                  <Icon as={TbArrowRight} ml={1} transform="rotate(320deg)" />
                </Text>
              </Link>
            </Box>
          </Flex>
          <Flex gap={8}>
            <Box
              bg="url('https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              objectFit="cover"
              aspectRatio="1/1"
              w="15%"
              maxW={{ sm: "100%", md: "40%" }}
              borderRadius={9}
              overflow="hidden"
              _hover={{ opacity: 0.7 }}
              transition="all 0.7s"
            />
            <Box flex={1}>
              <Text color="gray" fontSize="sm">
                Oct 26, 2026
              </Text>
              <Link to="">
                <Text fontWeight={500} _hover={{ textDecor: "underline" }}>
                  Lorem ipsum dolor sit.
                  <Icon as={TbArrowRight} ml={1} transform="rotate(320deg)" />
                </Text>
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
      </AnimateMove>

      <AnimateMove direction="y">
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
