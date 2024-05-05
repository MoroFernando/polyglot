import generateText from "@/utils/gemini/generateText";
import { systemPrompt } from "@/constants";

export const POST = async (req) => {
  const userPrompt = await req.text();

  const response = await generateText(userPrompt, systemPrompt, true);
  console.log(response);

  return new Response(response);
};
