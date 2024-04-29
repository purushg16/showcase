import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <VStack
      textAlign="center"
      p={{ base: 4, md: 8 }}
      borderRadius={10}
      bg="whiteAlpha.50"
    >
      <Heading fontSize="lg"> Contact Me </Heading>
      <Text fontSize="sm" mb={8}>
        I'm currently taking freelancing projects, or, you can contact at{" "}
        <Link
          to="https://macdasy.com"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Macdasy
        </Link>
        .
        <br />
        By the way, I'm also looking for oppurtunities to work in a company or
        enterprise.
      </Text>
      <Link to="/connect">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "white", opacity: 0.8 }}
          rightIcon={<TbArrowUpRight />}
        >
          Get it Touch
        </Button>
      </Link>
      <Text fontSize="xs" opacity={0.7}>
        {" "}
        Feel free to ping me at anytime.{" "}
      </Text>
    </VStack>
  );
};

export default ContactForm;
