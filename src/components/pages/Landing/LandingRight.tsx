import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Show,
  Text,
} from "@chakra-ui/react";
import { IoNavigate } from "react-icons/io5";
import { TIconButton } from "../../elements/Button";
import useSkillStore from "../../../functions/store/skillStore";

const LandingRight = () => {
  const selectSkill = useSkillStore((s) => s.selectSkill);
  const selectedSkill = useSkillStore((s) => s.selectedSkill);

  return (
    <Flex
      px={10}
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      height="100%"
    >
      <Box>
        <Text ml={3} fontSize="2xl" as="b">
          Purush's
        </Text>

        <Show above="lg">
          <Heading lineHeight="90%" fontSize="9em">
            SHOW
            <br />
            CASE<span style={{ color: "red" }}>.</span>
          </Heading>
        </Show>

        <Show below="lg">
          <Heading lineHeight="90%" fontSize="8em">
            Show
            <br />
            Case<span style={{ color: "red" }}>.</span>
          </Heading>
        </Show>

        <Box ml={5}>
          <HStack my={3}>
            <Button
              display="flex"
              variant="ghost"
              onClick={() => {
                selectSkill("front");
              }}
            >
              {selectedSkill === "front" && (
                <Text color="red" fontSize="2xl" mr={2}>
                  {">"}
                </Text>
              )}
              Front-end
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                selectSkill("back");
              }}
            >
              {selectedSkill === "back" && (
                <Text color="red" fontSize="2xl" mr={2}>
                  {">"}
                </Text>
              )}
              Back-end
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                selectSkill("others");
              }}
            >
              {selectedSkill === "others" && (
                <Text color="red" fontSize="2xl" mr={2}>
                  {">"}
                </Text>
              )}
              Others
            </Button>
          </HStack>

          <TIconButton text="See Projects" icon={IoNavigate} color="red" />
        </Box>
      </Box>
    </Flex>
  );
};

export default LandingRight;
