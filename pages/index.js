import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 4vmin;
  font-family: sans-serif;
  transform: translate(-50%, -50%);
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco Mojica</title>
      </Head>
      <Main>
        Marco Mojica
        <br />
        <br />
        +49 1515 4750027
        <br />
        <a href="mailto:marco@mojica.de">marco@mojica.de</a>
        <br />
        <br />
        Rather Str. 21e
        <br />
        40476 Düsseldorf
      </Main>
    </>
  );
}
