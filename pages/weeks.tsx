import Head from 'next/head';
import {differenceInWeeks} from "date-fns"
import styled from "styled-components"

const Main = styled.main`
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(52, calc(100vw / 52));
  grid-template-rows: repeat(100, calc(100vw / 52));
  gap: 5px;
`;

const Week = styled.div`
  background-color: #ececec;
  border-radius: 50%;
  border: 1px solid #a6a6a6;
`

const PassedWeek = styled(Week)`
  background-color: #9d9dff;
`

export default function Weeks() {

const birth = new Date(1991, 8, 17)

const today = new Date()

const diference = differenceInWeeks(today, birth)

let weeks = []

for (let week = 0; week < 100 * 52; week++){
  if(week < diference) {
    weeks.push(<PassedWeek key={week} />)
  } else {
    weeks.push(<Week key={week} />)
  }
}

  return (
    <>
      <Head>
        <title>Weeks</title>
      </Head>
      <Main>
      {weeks}
      </Main>
    </>
  );
}
