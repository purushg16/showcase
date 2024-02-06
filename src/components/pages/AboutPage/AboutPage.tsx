import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ContactLinksGrid from "../../elements/ContactLinksGrid";
import Footer from "../../elements/Footer";
import AnimateMove from "../../motions/Move";
import AboutTopics from "./AboutTopic";
import Tools from "./Tools";

const AboutPage = () => {
  return (
    <Box>
      <AnimateMove direction="y">
        <Box>
          <Text fontSize="3xl" fontWeight={700}>
            About
          </Text>
          <Text color="gray">Myself</Text>
        </Box>
      </AnimateMove>

      <Flex gap={20} w="100%" my={20} flexDir="column">
        <AboutTopics
          delay={0.1}
          title="About"
          children={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ]}
        />

        <AboutTopics
          delay={0.2}
          title="Toolkit"
          children={[
            <Text>
              As an organised and well knowledged developer & designer, I have
              created applications with different set of tools.
            </Text>,
            <Tools
              title="For frontend, I have knowledge in"
              desc="React, Redux, Zustand, ReactQuery, Material UI, Chakra UI,
                    Javascript, Typescript and more."
            />,
            <Tools
              title="For backend & database, I am aligned with"
              desc="Node, Express, Postman, MongoDB, Mongoose."
            />,
            <Tools
              title="As others, I have understanding in"
              desc="Git(Version Control), Google OAuth, Password.js, Cloudinary,
                  Multer and more."
            />,
            <Tools
              title="Apart from web, I have gained certifications in"
              desc="Python and Flutter.With Data Science, Pandas, Selenium in Python and Firebase
                  with Flutter."
            />,
          ]}
        />

        <AboutTopics
          delay={0.3}
          title="Experiance"
          children={[
            "3+ years of professional development experience.",
            "As a developer I haven't worked in any enterprise or company. Yet, I have sharpened myself with some good stuff in web design & development all by myself for more than 5 years.",
            `Worked & Delivered 3+ High Level Web Applicaions that really
            helped to solve problems in real life scenarios.`,
            <Link to="/works">
              <Text textDecor="underline" color="teal">
                View All Projects
              </Text>
            </Link>,
            `I have Python & Flutter certifications at my desk, though, I
            have driven myself towards this wonderful Web tech journey.`,
            `If you have any related project, kindly Contact me through any
            of the contact method mentioned above.`,
          ]}
        />

        <AboutTopics
          delay={0.4}
          title="Contact"
          children={[
            <Text>
              Have a question or just want to chat? Feel free to email me. Try
              finding me at
              <span style={{ color: "teal" }}> @officialpurushothaman </span>
            </Text>,
            <ContactLinksGrid />,
          ]}
        />
      </Flex>
      <Footer />
      <Divider my={10} w="40%" mx="auto" />
    </Box>
  );
};

export default AboutPage;
