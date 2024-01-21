import {
  Box,
  Button,
  Flex,
  HStack,
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
import { IoArrowDown, IoMailSharp, IoSend } from "react-icons/io5";
import { TbArrowRight, TbPhone } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../../dist/assets/logo.png";
import { IconButton } from "../../elements/Button";
import AnimateMove from "../../motions/Move";
import SkillsGrid from "./SkillsGrid";
import { langugageFilterType } from "./langugageFilterType";
import { AiOutlineMail } from "react-icons/ai";

const AboutPage = () => {
  const [filter, setFilter] = useState<langugageFilterType>("all");

  return (
    <Box paddingY={{ sm: 20, md: 5 }}>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} gap={10}>
        <AnimateMove>
          <Box>
            <Image borderRadius={7} src={logo} alt="will arrive shortly" />
          </Box>
        </AnimateMove>

        <AnimateMove direction="y">
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box>
              <Text
                fontWeight={600}
                opacity={0.5}
                lineHeight={0}
                fontSize={"sm"}
              >
                Web Developer
              </Text>
              <Text fontSize="4xl" fontWeight={600}>
                Purushothaman G
              </Text>

              <Text textAlign="justify" py={7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                veritatis qui numquam veniam delectus blanditiis non,
                accusantium aperiam? Veniam eius sunt, veritatis sequi dolorum
                sint esse dolorem temporibus aut omnis blanditiis deserunt ad
                iure alias ut, placeat vero necessitatibus, eveniet hic.
              </Text>
            </Box>

            <HStack gap={2}>
              <IconButton route="works" text="Works" icon={<TbArrowRight />} />
              <IconButton route="contact" text="Contact" icon={<TbPhone />} />

              <HashLink to="/about#more">
                <IconButton
                  route="about"
                  text="More"
                  icon={<IoArrowDown />}
                  color="messenger"
                />
              </HashLink>
            </HStack>
          </Flex>
        </AnimateMove>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2 }}
        mt={40}
        spacing={{ md: 5, lg: 0 }}
      >
        <Box>
          <Text id="more" fontSize="4xl">
            Languages
          </Text>
          <Show above="md">
            <HStack my={5}>
              <Button
                colorScheme={filter === "all" ? "blue" : "gray"}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                variant="outline"
                colorScheme={filter === "web" ? "blue" : "gray"}
                onClick={() => setFilter("web")}
              >
                Web
              </Button>
              <Button
                variant="outline"
                colorScheme={filter === "mobile" ? "blue" : "gray"}
                onClick={() => setFilter("mobile")}
              >
                Mobile
              </Button>
            </HStack>
          </Show>
        </Box>

        <Box my={{ sm: 5 }}>
          <SkillsGrid filter={filter} />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2 }}
        mt={40}
        spacing={{ md: 5, lg: 0 }}
      >
        <Box>
          <Text id="more" fontSize="4xl">
            Certifications
          </Text>
        </Box>

        <Box mt={{ sm: 5 }}>
          <Box>
            <Text fontSize="lg"> Python </Text>
            <Text color="gray">
              Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit
              Learn, Plotly, and Matplotlib.
            </Text>
          </Box>

          <Box mt={5}>
            <Text fontSize="lg"> Flutter </Text>
            <Text color="gray">Dart, State Management, Firebase</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2 }}
        mt={40}
        spacing={{ md: 5, lg: 0 }}
      >
        <Box>
          <Text id="more" fontSize="4xl">
            Contact
          </Text>
          <Text color="gray" width={80}>
            Ring @officialpurushothaman@gmail.com
          </Text>
          <HStack my={5}>
            <Link
              to="https://www.linkedin.com/in/purushothaman-g-081a2622a"
              target="_blank"
            >
              <Button variant="outline">LinkedIn</Button>
            </Link>
            <Link to="https://github.com/purushg16" target="_blank">
              <Button>Github</Button>
            </Link>
          </HStack>
        </Box>

        <Box mt={{ sm: 5 }}>
          <Box>
            <form onSubmit={() => {}}>
              <Stack spacing={3}>
                <Input variant="outline" placeholder="Name" isRequired />
                <Input variant="outline" placeholder="Email" isRequired />
                <Textarea variant="outline" placeholder="Message" isRequired />
              </Stack>
              <Button my={5} type="submit" colorScheme="blue">
                Send <Icon as={IoSend} boxSize={3} ml={2} />
              </Button>
            </form>
          </Box>
        </Box>
      </SimpleGrid>

      <Box my={10}>
        <HStack my={2} gap={5}>
          <Icon as={AiOutlineMail} boxSize={5} />
          <Icon as={VscGithubAlt} boxSize={5} />
          <Icon as={TiSocialLinkedin} boxSize={6} />
        </HStack>
        <Text fontSize="xs">© 2024 PURUSHOTHAMAN DESIGN</Text>
      </Box>
    </Box>
  );
};

export default AboutPage;
