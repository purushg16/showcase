import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import { useParams } from "react-router-dom";
import works from "../../data/works";
import UnderLineButtton, {
  IconButton,
  LinkButton,
  NavButton,
} from "../../elements/Button";
import DesignSystem from "../../elements/Project/DesignSystem";
import WorkDetails from "../../elements/Project/WorkDetails";
import Screenshots from "./Screenshots";
import { Link } from "react-router-dom";

const SingleWork = () => {
  const title = useParams().title;
  const work = works.results.data.find((d) => d.slug === title);
  if (!work) return <Text> No data found! </Text>;
  return (
    <Flex flexDir="column" gap={16}>
      <WorkDetails work={work} />

      <Box>
        <Screenshots work={work} desc={work.screenshostDesc} />
      </Box>

      <Box textAlign="center">
        <Text mb={4}>{work.note}</Text>
        <UnderLineButtton text="Visit Project" route={work.url} />
      </Box>

      <Box>
        <Divider my={10} w={400} mx="auto" />
        <DesignSystem designSystem={work.designSystem} tags={work.tags} />
      </Box>

      <Box textAlign="center">
        <Divider my={10} w={400} mx="auto" />
        <IconButton
          text="All Projects"
          route="works"
          icon={<TbArrowLeft />}
          left
        />
      </Box>
    </Flex>
  );
};

export default SingleWork;
