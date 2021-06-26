import { Link, Heading, Container, VStack } from "@chakra-ui/react"

export default function Work() {
  return <Container>
    <Heading>Projects</Heading>
    <VStack
      spacing="2"
      fontSize="2xl"
      align="flex-start">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://indexed.cloud/">
        indexed.cloud
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github-event-well-foxhunt.vercel.app/">
        github-event-well
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://convos.art/">
        convos.art
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://dreambook.space/">
        dreambook.space
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://quorum-sensing-axnuog89l.now.sh/">
        quorum-sensing
      </Link>
    </VStack>
  </Container>
}
