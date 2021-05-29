import styled from "styled-components"

const Entry = styled.a`
  margin: 10px 0px;
`

export default function Work(){
  return <>
    <p>Projects</p>
    <Entry
      target="_blank"
      rel="noopener noreferrer"
      href="https://indexed.cloud/">
      indexed.cloud
    </Entry>
    <Entry
      target="_blank"
      rel="noopener noreferrer"
      href="https://github-event-well-foxhunt.vercel.app/">
      github-event-well
    </Entry>
    <Entry
      target="_blank"
      rel="noopener noreferrer"
      href="https://convos.art/">
      convos.art
    </Entry>
    <Entry
      target="_blank"
      rel="noopener noreferrer"
      href="https://dreambook.space/">
      dreambook.space
    </Entry>
    <Entry
      target="_blank"
      rel="noopener noreferrer"
      href="https://quorum-sensing-axnuog89l.now.sh/">
      quorum-sensing
    </Entry>
  </>
}
