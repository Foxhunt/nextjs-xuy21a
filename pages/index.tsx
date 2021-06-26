import Head from 'next/head';
import { Container, Stack } from '@chakra-ui/react';

import Bio from "../components/Bio"
import Work from "../components/Work"

export default function Home() {
  return (
    <Container centerContent pt="5" color="black">
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Stack
        direction={["column", "row"]}
        spacing={["30"]}>
        <Bio />
        <Work />
      </Stack>
    </Container>
  );
}
