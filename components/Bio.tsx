import { Container, Heading, HStack, Link, Icon } from "@chakra-ui/react";
import { GitHub, Instagram, Mail, Phone } from "react-feather";

export default function Bio() {
  return (
    <Container>
      <Heading my={3} whiteSpace="nowrap">
        Marco Mojica
      </Heading>
      <HStack justify={"space-between"}>
        <Link aria-label="Mail" isExternal href="mailto:marco@mojica.de">
          <Icon w="7" h="7" as={Mail} />
        </Link>
        <Link
          aria-label={"+4915154750027".split("").join(" ")}
          isExternal
          href="tel:+4915154750027"
        >
          <Icon w="7" h="7" as={Phone} />
        </Link>
        <Link aria-label="GitHub" isExternal href="https://github.com/Foxhunt">
          <Icon w="7" h="7" as={GitHub} />
        </Link>
        <Link
          aria-label="Instagram"
          isExternal
          href="https://www.instagram.com/wasfuernname/"
        >
          <Icon w="7" h="7" as={Instagram} />
        </Link>
      </HStack>
    </Container>
  );
}
