import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Highlight,
  Show,
  Text,
} from "@chakra-ui/react";
import { IoNavigate } from "react-icons/io5";
import { TbMoodCrazyHappy } from "react-icons/tb";
import useSkillStore from "../../../functions/store/skillStore";
import { TIconButton } from "../../elements/Button";
import AnimateMove from "../../motions/Move";

const LandingRight = () => {
  const selectSkill = useSkillStore((s) => s.selectSkill);
  const selectedSkill = useSkillStore((s) => s.selectedSkill);

  return (
    <Flex
      borderLeft="2px solid"
      borderColor="red.300"
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
            CASE
            <span>
              <Highlight query="." children="." styles={{ color: "red.900" }} />
            </span>
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
                <AnimateMove>
                  <Text color="red" fontSize="2xl" mr={2}>
                    {"I"}
                  </Text>
                </AnimateMove>
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
                <AnimateMove>
                  <Text color="red" fontSize="2xl" mr={2}>
                    {"I"}
                  </Text>
                </AnimateMove>
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
                <AnimateMove>
                  <Text color="red" fontSize="2xl" mr={2}>
                    I
                  </Text>
                </AnimateMove>
              )}
              Others
            </Button>
          </HStack>

          <Box my={5}>
            <TIconButton
              text="See Projects"
              icon={IoNavigate}
              color="red"
              route="/projects"
              link
            />
            <TIconButton text="More Me" icon={TbMoodCrazyHappy} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default LandingRight;
