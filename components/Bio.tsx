import { GitHub, Instagram } from 'react-feather';

export default function Bio(){
  return <>
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
  </>
}
