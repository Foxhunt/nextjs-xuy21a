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

import mmojica from "../public/mmojica.jpg";

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
          <Link
            aria-label="GitHub"
            isExternal
            href="https://github.com/Foxhunt"
          >
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
