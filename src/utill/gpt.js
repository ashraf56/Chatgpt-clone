import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_apiKey, dangerouslyAllowBrowser: true });

async function main(input) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": input }
    ],
    stream: true,
  });
  let result = '';
  for await (const chunk of completion) {
    if (chunk.choices[0].delta.content) {
      result += chunk.choices[0].delta.content;
    }
  }
  return result
}

export default main;