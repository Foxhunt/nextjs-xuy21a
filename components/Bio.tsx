import { Container, Heading, HStack, Link, Icon } from "@chakra-ui/react";
import { GitHub, Instagram, Mail } from 'react-feather';

export default function Bio() {
  return <Container>
    <Heading whiteSpace="nowrap">
      Marco Mojica
    </Heading>
    <HStack>
      <Link
        aria-label="Mail"
        href="mailto:marco@mojica.de">
        <Icon
          w="7"
          h="7"
          as={Mail} />
      </Link>
      <Link
        aria-label="GitHub"
        isExternal
        href="https://github.com/Foxhunt">
        <Icon
          w="7"
          h="7"
          as={GitHub} />
      </Link>
      <Link
        aria-label="Instagram"
        isExternal
        href="https://www.instagram.com/wasfuernname/">
        <Icon
          w="7"
          h="7"
          as={Instagram} />
      </Link>
    </HStack>
  </Container >
}
