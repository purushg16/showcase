import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Hide,
  Highlight,
  Icon,
  Image,
  Input,
  Show,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoArrowDown, IoSend } from "react-icons/io5";
import { TbArrowRight, TbPhone } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";
import logo from "../../../../dist/assets/logo.png";
import { IconButton } from "../../elements/Button";
import Footer from "../../elements/Footer";
import AnimateMove from "../../motions/Move";
import SkillsGrid from "./SkillsGrid";
import { langugageFilterType } from "./langugageFilterType";
import Techniques from "../../elements/About/Techniques";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [filter, setFilter] = useState<langugageFilterType>("all");

  return (
    <Box paddingY={{ sm: 20, md: 5 }}>
      <AnimateMove direction="y">
        <Box>
          <Text fontSize="3xl" fontWeight={700}>
            About
          </Text>
          <Text color="gray">Myself</Text>
        </Box>
      </AnimateMove>

      <Flex gap={20} w="100%" my={20} flexDir="column">
        <AnimateMove direction="y">
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap={4}>
            <Box w={{ base: "max-content", md: "20%" }}>
              <Text color="gray"> About </Text>
            </Box>

            <Box flex={1}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <Text my={4}>
                  Quo quisquam, eligendi distinctio excepturi ratione, magni
                  vitae esse.
                </Text>
                <Text my={4}>
                  Quo quisquam, eligendi distinctio excepturi ratione, magni
                  vitae esse reprehenderit.
                </Text>
              </Text>
            </Box>
          </Flex>
        </AnimateMove>

        <AnimateMove direction="y">
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap={4}>
            <Box w={{ base: "max-content", md: "20%" }}>
              <Text color="gray"> Contact </Text>
            </Box>

            <Box flex={1}>
              <Text>
                Have a question or just want to chat? Feel free to email me. Try
                finding me anywhere else at @_purush_g
                <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} spacing={4}>
                  <Button
                    py={8}
                    variant="outline"
                    rightIcon={
                      <Icon as={TbArrowRight} transform="rotate(320deg)" />
                    }
                    leftIcon={
                      <>
                        <Icon as={SiInstagram} mr={4} />
                        <Text> Instagram </Text>
                      </>
                    }
                    _hover={{ opacity: 0.8 }}
                    alignItems="center"
                    justifyContent="space-between"
                  />
                  <Button
                    py={8}
                    variant="outline"
                    rightIcon={
                      <Icon as={TbArrowRight} transform="rotate(320deg)" />
                    }
                    leftIcon={
                      <>
                        <Icon as={SiGmail} mr={4} />
                        <Text> EMail </Text>
                      </>
                    }
                    _hover={{ opacity: 0.8 }}
                    alignItems="center"
                    justifyContent="space-between"
                  />
                  <Button
                    py={8}
                    variant="outline"
                    rightIcon={
                      <Icon as={TbArrowRight} transform="rotate(320deg)" />
                    }
                    leftIcon={
                      <>
                        <Icon as={SiGithub} mr={4} />
                        <Text> Github </Text>
                      </>
                    }
                    _hover={{ opacity: 0.8 }}
                    alignItems="center"
                    justifyContent="space-between"
                  />
                  <Button
                    py={8}
                    variant="outline"
                    rightIcon={
                      <Icon as={TbArrowRight} transform="rotate(320deg)" />
                    }
                    leftIcon={
                      <>
                        <Icon as={SiLinkedin} mr={4} />
                        <Text> LinkedIn </Text>
                      </>
                    }
                    _hover={{ opacity: 0.8 }}
                    alignItems="center"
                    justifyContent="space-between"
                  />
                </SimpleGrid>
              </Text>
            </Box>
          </Flex>
        </AnimateMove>

        <AnimateMove direction="y">
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap={4}>
            <Box w={{ base: "max-content", md: "20%" }}>
              <Text color="gray"> Experience </Text>
            </Box>

            <Box flex={1}>
              <Text>
                <Text>3+ years of professional development experience.</Text>
                <Text my={4}>
                  As a developer I haven't worked in any enterprise or company.
                  Yet, I have sherpened myself with some good stuff in web
                  design & development all by myself.
                </Text>

                <Text my={4}>
                  Worked & Delivered 3+ High Level Web Applicaions that really
                  helped to solve problems.
                  <Link to="/works">
                    <Text textDecor="underline" color="gray">
                      View All Projects{" "}
                    </Text>
                  </Link>
                </Text>

                <Text my={4}>
                  I have Python & Flutter certifications at my desk, though, I
                  have driven myself towards this wonderful Web tech journey.
                </Text>
                <Text my={4}>
                  If you have any related project, kindly Contact me through any
                  of the contact method mentioned above.
                </Text>
              </Text>
            </Box>
          </Flex>
        </AnimateMove>
      </Flex>
      <Footer />
      <Divider my={10} w={400} mx="auto" />
    </Box>
  );
};

export default AboutPage;
