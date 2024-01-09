import { HStack, Heading, Icon, Text } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { SiFlutter, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import AnimateScale from "../motions/Scale";

const FrontEndSkills = () => {
  return (
    <AnimateScale>
      <HStack>
        <Icon as={IoLogoReact} boxSize={20} />
        <Icon as={SiTypescript} boxSize={20} />
        <Icon as={TbBrandJavascript} boxSize={20} />
      </HStack>
      <Text fontSize="md">
        <Heading my={3}> Frontend_ </Heading>
        As a Frontend Developer, I specialize in building responsive and dynamic
        user interfaces using React, TypeScript, and JavaScript. My expertise
        lies in crafting efficient and maintainable code, ensuring seamless user
        experiences across various platforms.
      </Text>
    </AnimateScale>
  );
};

const BackEndSkills = () => {
  return (
    <AnimateScale>
      <HStack>
        <Icon as={IoLogoNodejs} boxSize={20} />
        <Heading> Expressjs </Heading>
        <Icon as={IoLogoGithub} boxSize={20} />
        <Icon as={SiMongodb} boxSize={20} />
      </HStack>
      <Text fontSize="md">
        <Heading my={6}> Backend_ </Heading>
        As a Full Stack Developer, I leverage the power of Node.js and Express
        to build scalable and performant server-side applications. Proficient in
        MongoDB, I design dynamic and efficient databases. My collaborative
        approach is reflected in my active contributions to open-source projects
        on GitHub.
      </Text>
    </AnimateScale>
  );
};

const OtherSkills = () => {
  return (
    <AnimateScale>
      <HStack>
        <Icon as={IoLogoPython} boxSize={20} />
        <Icon as={SiFlutter} boxSize={20} />
      </HStack>
      <Text fontSize="md">
        <Heading my={6}> Others_ </Heading>
        As other, I specialize in creating cross-platform mobile applications
        with Flutter, delivering smooth and visually appealing user interfaces.
        Proficient in Python, I develop robust backend solutions, leveraging its
        versatility for web applications and data processing tasks.
      </Text>
    </AnimateScale>
  );
};

export { FrontEndSkills, BackEndSkills, OtherSkills };
