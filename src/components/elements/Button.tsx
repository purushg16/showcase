import { Button, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { TbArrowRight } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps {
  text: string;
  route: string;
  size?: string;
  active?: boolean;
}

const LinkButton = ({ text, route, size = "sm" }: LinkButtonProps) => {
  const active = window.location.pathname === `/${route}`;

  const navigate = useNavigate();
  return (
    <Button
      p={0}
      px={active ? 3 : 0}
      size={size}
      variant={active ? "solid" : "text"}
      fontWeight={400}
      opacity={active ? 1 : 0.5}
      _hover={{ opacity: 1 }}
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

interface UButton {
  text: string;
  route: string;
  icon?: IconType;
}

const UnderLineButtton = ({ text, route, icon = TbArrowRight }: UButton) => {
  return (
    <Link to={route} target="_blank">
      <Text
        fontSize="sm"
        borderBottom="1px solid gray"
        w="max-content"
        m="auto"
      >
        {text}
        <Icon
          as={icon}
          ml={2}
          transform={icon === TbArrowRight ? "rotate(320deg)" : ""}
        />
      </Text>
    </Link>
  );
};

export default UnderLineButtton;
