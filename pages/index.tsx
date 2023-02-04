import Head from 'next/head';
import { Container, Stack } from '@chakra-ui/react';

import Bio from '../components/Bio';
import Work from '../components/Work';

// Hello there ( •̀ ω •́ )y
// If this “Emoji” bothers you as much as me, welcome.
// The fact you are reading this lets me know you are of the curious kind.
// You either cloned the repo, started editing on StackBlitz or just checked out the files on GitHub.
// Or you are reading the sourcemaps, Nerd.
// This is a portfolio Page and personal Blog.
// You are welcome to look around and give your thoughts.
// I hope you find something for your curiosity.

export default function Home() {
  return (
    <Container pt="5" color="black">
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Stack direction={['column', 'row']} spacing={['30']}>
        <Bio />
        <Work />
      </Stack>
    </Container>
  );
}
