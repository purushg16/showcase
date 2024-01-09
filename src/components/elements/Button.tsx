import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  color?: string;
}

const TIconButton = ({ icon, text, color = "gray" }: Props) => {
  return (
    <Button colorScheme={color} mr={2}>
      {text} <Icon as={icon} mx={2} />
    </Button>
  );
};

export { TIconButton };
