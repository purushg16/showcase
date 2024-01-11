import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import AnimateMove from "../motions/Move";

interface LinkButtonProps {
  text: string;
  route: string;
  color?: string;
  icon?: IconType;
}

const LinkButton = ({ text, route }: LinkButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      justifyContent="start"
      alignItems="center"
      size="lg"
      transition="all 0.7s"
      _hover={{ color: "teal", borderColor: "teal" }}
      onClick={() => {
        navigate(`/${route}`);
      }}
    >
      <Flex width="100%">
        <Text color="white" fontSize="sm">
          {text}
        </Text>
        <Spacer />
        <Text fontSize="sm">
          <AnimateMove direction="y">|</AnimateMove>
        </Text>
      </Flex>
    </Button>
  );
};
export { LinkButton };

interface NavButtonProps {
  text: string;
  route: string;
}

const NavButton = ({ text, route }: NavButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(`/${route}`);
      }}
      pl={0}
      pb={0}
      size="lg"
      justifyContent="start"
      width="100%"
      fontWeight={300}
      color="gray"
      textAlign="left"
      variant="text"
      borderBottom={"1px solid gray"}
      _hover={{ color: "white" }}
      transition="all 0.7s"
    >
      {text}
    </Button>
  );
};
export { NavButton };
