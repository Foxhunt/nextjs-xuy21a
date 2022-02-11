import Head from 'next/head';
import { Container, Grid, Icon } from '@chakra-ui/react';
import { differenceInWeeks } from 'date-fns';

const Circle = (props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <circle
      cx="10"
      cy="10"
      r="10"
      strokeWidth="1"
      stroke="#a6a6a6"
      fill="currentColor"
    />
  </Icon>
);

export default function Weeks() {
  const birth = new Date(1991, 8, 17);
  const today = new Date();
  const diference = differenceInWeeks(today, birth);
  const weeks = new Array(100 * 52)
    .fill('')
    .map((_, index) =>
      index < diference ? (
        <Circle key={index} h="calc(100vw / 52 - 4px)" color="#ececec" />
      ) : (
        <Circle key={index} h="calc(100vw / 52 - 4px)" color="#9d9dff" />
      )
    );

  return (
    <Container centerContent>
      <Head>
        <title>Weeks</title>
      </Head>
      <Grid
        pt="1"
        gap="3px"
        justifyItems="center"
        alignItems="center"
        templateColumns="repeat(52, calc(100vw / 52 - 4px))"
      >
        {weeks}
      </Grid>
    </Container>
  );
}
