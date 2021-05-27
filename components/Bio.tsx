import styled from "styled-components"
import { GitHub, Instagram } from 'react-feather';

const Container = styled.div`

`

const Line = styled.p`
  margin: 4vmin 0px;
`

const Link = styled.a`
  margin-right: 5vmin;
`

export default function Bio(){
  return <Container>
    <Line>
      Marco Mojica
    </Line>
    <Line>
      <a href="mailto:marco@mojica.de">marco@mojica.de</a>
    </Line>
    <Line>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Foxhunt">
        <GitHub width="8vmin" height="8vmin"/>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/wasfuernname/">
        <Instagram width="8vmin" height="8vmin"/>
      </Link>
    </Line>
  </Container>
}
