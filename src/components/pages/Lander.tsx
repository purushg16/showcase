import {
  Box,
  HStack,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { LinkButton } from "../elements/Button";
import AnimateScale from "../motions/Scale";

const Lander = () => {
  return (
    <Box paddingY={20} sx={{ paddingX: { sm: 0, md: 20 } }} position="relative">
      {/* <Image
        position="absolute"
        opacity={0.1}
        top={50}
        right={-300}
        src="https://cdn.dribbble.com/users/546051/screenshots/4478704/360.png?resize=768x576&vertical=center"
      /> */}

      <Heading as={"h5"} size="sm">
        Hey there, myself
      </Heading>
      <Heading fontSize="6xl" mt={5} mb={20}>
        Purush, an Indian freelance <br />
        <AnimateScale>
          <Highlight
            query={["web |", "python |", "flutter"]}
            styles={{
              color: "teal",
              fontWeight: 300,
            }}
          >
            web | python | flutter
          </Highlight>
        </AnimateScale>
        developer.
      </Heading>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={5}
        sx={{ width: { sm: "100%", md: "80%" } }}
      >
        <LinkButton text="Work" route="projects" />
        <LinkButton text="Profile" route="l" />
        <LinkButton text="Contact" route="l" />
      </SimpleGrid>
    </Box>
  );
};

export default Lander;
