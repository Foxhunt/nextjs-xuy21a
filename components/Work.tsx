import { Container, Heading, VStack } from "@chakra-ui/react";
import ExternalLink from "./ExternalLink";

export default function Work() {
  return (
    <Container>
      <Heading my={3}>Projects</Heading>
      <VStack spacing="2" fontSize="2xl" align="flex-start">
        <ExternalLink href="https://www.welldone24.de/">
          Welldone24
        </ExternalLink>
        <ExternalLink href={"https://app.mobilesys.de/login"}>
          GoFundYourself
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
        <ExternalLink href="https://convos.art/">convos.art</ExternalLink>
        <ExternalLink href="https://dreambookspace.vercel.app/">
          dreambook.space
        </ExternalLink>
        <ExternalLink href="https://quorum-sensing-axnuog89l.now.sh/">
          quorum-sensing
        </ExternalLink>
      </VStack>
    </Container>
  );
}
