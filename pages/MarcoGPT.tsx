import {
  Box,
  Button,
  Container,
  Input,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { useState } from "react";

export default function MarcoGPT() {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    {
      role: "assistant",
      content: "Hallo, wie kann ich dir helfen?",
    },
  ]);
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
      <Stack direction={"column"} h={"100dvh"} py={4}>
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
              {typeof message.content === "string" && message.content}
            </Box>
          ))}
          {isTyping && (
            <Skeleton
              maxW={"80%"}
              h={"40px"}
              colorPalette={"blue"}
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
          <Button disabled={input === ""} type="submit">
            Send
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
