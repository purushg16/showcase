import {
  SimpleGrid,
  Image,
  Text,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

interface Props {
  screenshots: string[];
}

const Screenshots = ({ screenshots }: Props) => {
  const [gridSize, setGridSize] = useState(1);

  return (
    <>
      <Flex>
        <Text fontSize="4xl"> Screenshots </Text>
        <Spacer />
        <ButtonGroup isAttached variant="outline">
          <IconButton
            aria-label="Add to friends"
            icon={<CiGrid2H />}
            background={gridSize === 1 ? "gray.200" : "none"}
            onClick={() => setGridSize(1)}
          />
          <IconButton
            aria-label="Add to friends"
            background={gridSize === 2 ? "gray.200" : "none"}
            icon={<CiGrid41 />}
            onClick={() => setGridSize(2)}
          />
        </ButtonGroup>
      </Flex>

      <SimpleGrid
        columns={{ base: gridSize, md: gridSize }}
        spacing={2}
        marginY={5}
      >
        {screenshots.map((img) => (
          <Image src={img} alt="nope" loading="eager" />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Screenshots;
