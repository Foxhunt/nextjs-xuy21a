import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const systemPrompt = process.env.SYSTEM_PROMPT!.replace(/\\n/g, "\n");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { input, messages } = req.body;

  console.log("messages:", messages);
  console.log("input:", input);

  await kv.rpush("inputs", input);

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    max_tokens: 256,
    messages: [
      { role: "system", content: systemPrompt },
      ...messages,
      { role: "user", content: input },
    ],
  });

  res.status(200).json({ message: chatCompletion.choices[0].message });
}
