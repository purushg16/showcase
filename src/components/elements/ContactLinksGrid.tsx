import { SimpleGrid, Button, Icon, Text } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import ContactLinks from "../../functions/data/ContactLinks";

const ContactLinksGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} spacing={4}>
      {ContactLinks.map((link) => (
        <Link to={link.link}>
          <Button
            w="100%"
            py={8}
            variant="outline"
            rightIcon={<Icon as={TbArrowRight} transform="rotate(320deg)" />}
            leftIcon={
              <>
                <Icon as={link.logo} mr={4} />
                <Text> {link.name} </Text>
              </>
            }
            _hover={{ opacity: 0.8 }}
            alignItems="center"
            justifyContent="space-between"
          />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ContactLinksGrid;
