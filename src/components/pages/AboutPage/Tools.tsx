import { Text } from "@chakra-ui/react";

interface Props {
  title: String;
  desc: string;
}

const Tools = ({ title, desc }: Props) => {
  return (
    <Text my={4}>
      {title} <span style={{ fontWeight: 700 }}>{desc}</span>
    </Text>
  );
};

export default Tools;
