import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Spacer,
  Box,
  SimpleGrid,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import { NavButton } from "../Button";
import AnimateMove from "../../motions/Move";

const MenuModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="text" size="lg" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="slideInRight"
      >
        <ModalOverlay />
        <ModalContent p={10} height="100%" background="black">
          <ModalCloseButton m={10} background="none" />
          <ModalBody height="100%">
            <Flex
              height="100%"
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Box padding={20} width="100%">
                <SimpleGrid columns={{ md: 1, lg: 4 }} spacing={6}>
                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="home" route="" />
                    </Box>
                  </AnimateMove>
                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="work" route="projects" />
                    </Box>
                  </AnimateMove>
                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="profile" route="projects" />
                    </Box>
                  </AnimateMove>
                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="contact" route="projects" />
                    </Box>
                  </AnimateMove>
                </SimpleGrid>
                {/* 
              <Box>
                <SimpleGrid columns={3}>
                  <ProjectCard
                    title="h"
                    desc={"woefhweo oewfhwoefw oweugfwe fwoewe u"}
                    icon={<></>}
                  />
                  <ProjectCard
                    title="h"
                    desc={"woefhweo oewfhwoefw oweugfwe fwoewe u"}
                    icon={<></>}
                  />
                  <ProjectCard
                    title="h"
                    desc={"woefhweo oewfhwoefw oweugfwe fwoewe u"}
                    icon={<></>}
                  />
                </SimpleGrid>
              </Box> */}
              </Box>
            </Flex>

            {/* <Flex width="100%" height="100%" flexDirection="column">
              <Spacer />
              <Text>hello</Text>
            </Flex> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModal;
