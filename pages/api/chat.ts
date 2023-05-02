import kv from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const systemPrompt = process.env.SYSTEM_PROMPT.replace(/\\n/g, "\n");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { input, messages } = req.body;

  console.log("messages:", messages);
  console.log("input:", input);

  await kv.rpush("inputs", input);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    messages: [
      { role: "system", content: systemPrompt },
      ...messages,
      { role: "user", content: input },
    ],
  });

  res.status(200).json({ message: response.data.choices[0].message });
}
