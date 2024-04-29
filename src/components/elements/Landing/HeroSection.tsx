import { VStack, Box, Image, Text, Highlight, Heading } from "@chakra-ui/react";
import profile from "../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <VStack align="start" gap={4}>
      <Box id="card-img-cont">
        <Image
          boxSize={100}
          borderRadius={999}
          src={profile}
          className="profile"
        />
      </Box>
      <Heading fontSize="3xl"> I'm Purush </Heading>
      <Text fontSize="md" opacity={0.7}>
        <Highlight
          query={"MERN Stack"}
          styles={{ color: "teal" }}
          children={`An aspiring MERN Stack freelancer,  
                            who loves building cool things with code, 
                            placing the right colors at right place and 
                            providing the lovable product `}
        />
        and have developed many{" "}
        <Link to="works" style={{ borderBottom: "1px solid" }}>
          web-applications
        </Link>{" "}
        with{" "}
        <Link
          to="https://macdasy.com"
          target="_blank"
          style={{ borderBottom: "1px solid" }}
        >
          Macdasy
        </Link>
        .
      </Text>
      {/* <Text fontSize="3xl" fontWeight={700}>
        <Text fontSize="md" fontWeight={500} opacity={0.8}>
          👋 Hey There,
        </Text>
        I'm Purush
        <Text fontSize="md" fontWeight={300} color="gray">
          I write code & can provide extreme outcome.
        </Text>
      </Text> */}
    </VStack>
  );
};

export default HeroSection;
