import { Container, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function WASD() {
  return (
    <Container>
      <NextSeo
        title="Zero (04.02.23)"
        description="It is Friday 8pm in Germany, I just decided to start writing."
      />
      <Heading my={3}>Zero (04.02.23)</Heading>
      <Text>
        It is Friday 8 pm in Germany, I just decided to start writing.
      </Text>
      <br />
      <Text>
        I have never been a big writer. But i figured it might help to get some
        thoughts out of my head by writing them down, and posting them on the
        internet. Maybe someday someone will read them and find them useful.
      </Text>
      <br />
      <Text>
        I&apos;m not sure about the main topic, format or frequency of these
        posts will be. I&apos;m just going to write about whatever comes to my
        mind.
      </Text>
      <br />
      <Text>
        Maybe this will help me become a better writer, thinker and developer.
        In the sense of formulating my thoughts and ideas into written words and
        concepts.
      </Text>
      <br />
      <Text>
        On top of that, this might become some sort of diary, where I can look
        back and check out what I was thinking about at a certain point in time.
        Plus I can train my typing, English and spelling skills.
      </Text>
      <br />
      <Text>
        So to whoever is reading this, wish me luck and I hope you find
        something useful in this.
      </Text>
      <br />
      <Text>Please look forward to my next post number one.</Text>
      <br />
      <Text>Marco</Text>
    </Container>
  );
}
