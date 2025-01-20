import { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Grid, Icon } from "@chakra-ui/react";
import { differenceInWeeks } from "date-fns";

const Circle = ({ color, children }) => (
  <Icon viewBox="0 0 30 30" color={color} h="calc(100vw / 52 - 4px)">
    <svg>
      <circle
        cx="15"
        cy="15"
        r="13"
        strokeWidth="2"
        stroke="#a6a6a6"
        fill="currentColor"
      />
      {children}
    </svg>
  </Icon>
);

export default function Weeks() {
  const [weeks, setWeeks] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const birth = new Date(1991, 8, 17);
    const today = new Date();
    const diference = differenceInWeeks(today, birth);
    setWeeks(
      new Array(100 * 53).fill("").map((_, index) =>
        index % 53 === 0 ? (
          <Circle key={index} color={"black"}>
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              fontWeight="bolder"
              fill="white"
            >
              {index / 53}
            </text>
          </Circle>
        ) : (
          <Circle
            key={index}
            color={index - index / 53 < diference ? "#ececec" : "#9d9dff"}
          >
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              {(index % 53) - 1}
            </text>
          </Circle>
        )
      )
    );
  }, []);

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
        templateColumns="repeat(53, calc(100vw / 53 - 4px))"
      >
        {weeks}
      </Grid>
    </Container>
  );
}
