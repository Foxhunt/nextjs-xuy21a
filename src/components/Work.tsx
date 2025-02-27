import { Container, Heading, Link, VStack } from "@chakra-ui/react";
import ExternalLink from "./ExternalLink";
import NextLink from "next/link";

export default function Work() {
  return (
    <Container>
      <Heading my={3} textAlign={"end"}>
        Projects
      </Heading>
      <VStack gap="2" fontSize="2xl" align="flex-end">
        <Link asChild>
          <NextLink href="/MarcoGPT" prefetch>
            MarcoGPT
          </NextLink>
        </Link>
        <ExternalLink href="https://bretagne.vercel.app/">
          Extra Muros 2022 Bretange
        </ExternalLink>
        <ExternalLink href={"https://dordogne.vercel.app/"}>
          Wieso Bilder?
        </ExternalLink>
        <ExternalLink href={"https://will-it-stick.vercel.app/"}>
          Will it stick?
        </ExternalLink>
        <ExternalLink href={"https://indexed.cloud/"}>
          indexed.cloud
        </ExternalLink>
        <ExternalLink href="https://spinning-spiral.vercel.app/">
          spinning-spiral
        </ExternalLink>
        <ExternalLink href="https://github-event-well-foxhunt.vercel.app/">
          github-event-well
        </ExternalLink>
        <ExternalLink href="https://quorum-sensing-axnuog89l.now.sh/">
          quorum-sensing
        </ExternalLink>
      </VStack>
    </Container>
  );
}
