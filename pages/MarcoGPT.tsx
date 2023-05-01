import {
  Box,
  Button,
  Container,
  Input,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function MarcoGPT() {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const complete = async (event) => {
    event.preventDefault();

    setMessages((messages) => [...messages, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input,
        messages,
      }),
    });

    const { message } = await response.json();

    setIsTyping(false);
    setMessages((messages) => [...messages, message]);
  };

  return (
    <Container color="black">
      <Stack direction={"column"} h={"100vh"} py={4}>
        <Stack
          direction={"column"}
          flexGrow={1}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
          }}
        >
          {messages.map((message, index, array) => (
            <Box
              maxW={"80%"}
              borderRadius={"xl"}
              p={3}
              alignSelf={message.role === "user" ? "flex-end" : "flex-start"}
              background={message.role === "user" ? "green.200" : "blue.300"}
              key={index}
              ref={(ref) => {
                if (array.length - 1 === index && ref) {
                  ref.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {message.content}
            </Box>
          ))}
          {isTyping && (
            <Skeleton
              maxW={"80%"}
              h={"40px"}
              startColor={"blue.300"}
              endColor={"blue.100"}
              borderRadius={"xl"}
            >
              <Box
                maxW={"80%"}
                h={"40px"}
                borderRadius={"xl"}
                background={"blue.300"}
              />
            </Skeleton>
          )}
        </Stack>
        <Stack direction="row" as={"form"} onSubmit={complete}>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button isDisabled={input === ""} type="submit">
            Send
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
