import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import AnimateMove from "../motions/Move";

interface Props {
  text: string;
  route: string;
  color?: string;
  icon?: IconType;
}

const LinkButton = ({ text, route }: Props) => {
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

// const TIconButton = ({
//   icon,
//   text,
//   color = "gray",
//   link = false,
//   route = "/",
// }: Props) => {
//   const navigate = useNavigate();

//   return (
//     <Button
//       colorScheme={color}
//       mr={2}
//       onClick={() => {
//         link && navigate(route);
//       }}
//     >
//       {text} <Icon as={icon} mx={2} />
//     </Button>
//   );
// };

// export { TIconButton };
