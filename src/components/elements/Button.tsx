import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import AnimateMove from "../motions/Move";
import { ReactNode } from "react";

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
      variant="text"
      fontWeight={300}
      _hover={{ opacity: 0.7 }}
      transition="all 0.7s"
      onClick={() => {
        navigate(`/${route}`);
      }}
    >
      {text}
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

interface IconButtonType {
  text: string;
  icon: ReactNode;
  route: string;
}

const IconButton = ({ text, icon, route }: IconButtonType) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(`/${route}`);
      }}
      colorScheme="gray"
    >
      {text}
      <Box mx={2}>{icon}</Box>
    </Button>
  );
};
export { IconButton };
