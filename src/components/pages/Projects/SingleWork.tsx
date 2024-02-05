import {
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbArrowLeft } from "react-icons/tb";
import { useParams } from "react-router-dom";
import works from "../../data/works";
import { IconButton } from "../../elements/Button";
import DesignSystem from "../../elements/Project/DesignSystem";
import WorkDetails from "../../elements/Project/WorkDetails";
import AnimateRotate from "../../motions/Rotate";
import Screenshots from "./Screenshots";
import AnimateMove from "../../motions/Move";

const SingleWork = () => {
  const title = useParams().title;
  const work = works.results.data.find((d) => d.slug === title);
  if (!work) return <Text> No data found! </Text>;
  return (
    <Flex flexDir="column" gap={16}>
      <WorkDetails project={work} />

      <AnimateMove>
        <Image src={work.image_url} alt="Some Error" w="100%" loading="lazy" />
      </AnimateMove>

      <Box>
        <AnimateMove direction="y">
          <Screenshots
            screenshots={work.screenshots}
            desc={work.screenshostDesc}
          />
        </AnimateMove>
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
