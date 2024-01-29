import { Button, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

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
      size="sm"
      variant="text"
      fontWeight={400}
      color="gray"
      _hover={{ color: "white" }}
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
export { NavButton };
export { IconButton };

interface NavButtonProps {
  text: string;
  route: string;
  hash?: boolean;
}

const NavButton = ({ text, route, hash = false }: NavButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      id="nav-btn"
      onClick={() => {
        !hash && navigate(`/${route}`);
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
      borderRadius={0}
      borderBottom={"1px solid gray"}
      _hover={{ color: "white" }}
      transition="all 0.7s"
    >
      {text}
    </Button>
  );
};

interface IconButtonType {
  text: string;
  icon: ReactNode;
  route: string;
  color?: string;
  left?: boolean;
}

const IconButton = ({
  text,
  icon,
  route,
  color = "gray",
  left = false,
}: IconButtonType) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => {
        navigate(`/${route}`);
      }}
      colorScheme={color}
      fontWeight={400}
    >
      {left && <Text mx={2}>{icon}</Text>}
      {text}
      {!left && <Text mx={2}>{icon}</Text>}
    </Button>
  );
};
