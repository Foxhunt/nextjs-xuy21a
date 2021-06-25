import Head from 'next/head';
import { Container, Grid, Box } from "@chakra-ui/react"
import { differenceInWeeks } from "date-fns"

export default function Weeks() {
  const birth = new Date(1991, 8, 17)
  const today = new Date()
  const diference = differenceInWeeks(today, birth)
  const weeks = new Array(100 * 52).fill("").map((_, index) =>
    index < diference ?
      <Box
        key={index}
        h="calc(100vw / 52 - 4px)"
        bg="#ececec"
        borderRadius="full"
        border="1px solid #a6a6a6" />
      :
      <Box
        key={index}
        h="calc(100vw / 52 - 4px)"
        bg="#9d9dff"
        borderRadius="full"
        border="1px solid #a6a6a6" />
  )

  return (
    <Container
      centerContent>
      <Head>
        <title>Weeks</title>
      </Head>
      <Grid
        pt="1"
        gap="3px"
        templateColumns="repeat(52, calc(100vw / 52 - 4px))">
        {weeks}
      </Grid >
    </Container >
  );
}
