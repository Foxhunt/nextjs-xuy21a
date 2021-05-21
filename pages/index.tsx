import Head from 'next/head';
import styled from 'styled-components';
import { GitHub, Instagram } from 'react-feather';

const Main = styled.main`
  font-size: 4vmin;
  font-family: sans-serif;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Main>
        <p>Marco Mojica</p>
        <p>
          <a href="mailto:marco@mojica.de">marco@mojica.de</a>
        </p>
        <p>
          <a href="https://github.com/Foxhunt" target="_blank">
            <GitHub />
          </a>
          <a href="https://www.instagram.com/wasfuernname/" target="_blank">
            <Instagram />
          </a>
        </p>
      </Main>
    </>
  );
}
