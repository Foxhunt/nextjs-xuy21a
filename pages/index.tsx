import Head from 'next/head';
import { Container } from '@chakra-ui/react';

import Bio from "../components/Bio"
import Work from "../components/Work"

export default function Home() {
  return (
    <Container maxW="xs">
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Bio />
      <Work />
    </Container>
  );
}
