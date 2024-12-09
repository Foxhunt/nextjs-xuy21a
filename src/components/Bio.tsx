import {
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GitHub, Instagram, Mail, Phone } from "react-feather";

import mmojica from "../../public/mmojica.jpg";

export default function Bio() {
  const router = useRouter();

  return (
    <Container>
      <VStack gap={3} display="flex" flexDir="column" alignItems={"stretch"}>
        <Heading
          whiteSpace="nowrap"
          onContextMenu={(event) => {
            event.preventDefault();
            router.push("weeks");
          }}
        >
          Marco Mojica
        </Heading>
        <HStack justify={"space-between"}>
          <Link
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:marco@mojica.de"
          >
            <Icon w="7" h="7">
              <Mail />
            </Icon>
          </Link>
          <Link
            aria-label={"+4915154750027".split("").join(" ")}
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4915154750027"
          >
            <Icon w="7" h="7">
              <Phone />
            </Icon>
          </Link>
          <Link
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Foxhunt"
          >
            <Icon w="7" h="7">
              <GitHub />
            </Icon>
          </Link>
          <Link
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/wasfuernname/"
          >
            <Icon w="7" h="7">
              <Instagram />
            </Icon>
          </Link>
        </HStack>
        <NextLink href={"/MarcoGPT"}>
          <Image
            priority
            src={mmojica}
            alt="Marco Mojica"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </NextLink>
      </VStack>
    </Container>
  );
}
