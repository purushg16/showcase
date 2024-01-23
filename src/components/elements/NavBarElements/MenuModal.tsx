import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import AnimateMove from "../../motions/Move";
import { NavButton } from "../Button";
import { HashLink, NavHashLink } from "react-router-hash-link";

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
          <ModalCloseButton m={10} color="white" />
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
                      <NavButton text="Home" route="" />
                    </Box>
                  </AnimateMove>

                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="Works" route="works" />
                    </Box>
                  </AnimateMove>
                  <AnimateMove direction="y">
                    <Box onClick={onClose}>
                      <NavButton text="Profile" route="about" />
                    </Box>
                  </AnimateMove>
                </SimpleGrid>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModal;
