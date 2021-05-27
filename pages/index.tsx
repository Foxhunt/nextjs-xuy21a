import Head from 'next/head';
import styled from 'styled-components';

import Bio from "../components/Bio"
import Work from "../components/Work"

const Main = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 6vmin;
  font-family: sans-serif;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Main>
        <Bio />
        <Work />
      </Main>
    </>
  );
}
