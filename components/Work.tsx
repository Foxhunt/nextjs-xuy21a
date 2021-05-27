import styled from "styled-components"

const Entry = styled.a`
  margin: 5px 0px;
`

export default function Work(){
  return <>
    <p>Projects</p>
    <Entry
      href="https://indexed.cloud/">
      indexed.cloud
    </Entry>
    <Entry
      href="https://github-event-well-foxhunt.vercel.app/">
      github-event-well
    </Entry>
    <Entry
      href="https://convos.art/">
      convos.art
    </Entry>
    <Entry
      href="https://dreambook.space/">
      dreambook.space
    </Entry>
  </>
}
