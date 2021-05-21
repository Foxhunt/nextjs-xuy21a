import Head from 'next/head';
import styled from 'styled-components';

import Bio from "../components/Bio"
import Work from "../components/Work"

const Main = styled.main`
  font-size: 4vmin;
  font-family: sans-serif;

  & svg {
    margin-right: 10px;
  }
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
