import generateText from "@/utils/gemini/generateText";

export const POST = async (req) => {
  
  const userPrompt = await req.text();
  const systemPrompt = "Voce é um identificador de idiomas. Sua função é identificar os idiomas do USER INPUT e responder no formato json contendo para chave o nome do idioma detectado escrito em portugues do brasil e o valor a traduçao do trecho correspondente. Como cada texto poderá ter mais de um idioma contido. Exemplo de saida para a frase 'Hello, ohayo' seria '{\"resposta\":{\"traducao\":\"Olá, bom dia\",\"idiomas\":[{\"nome\":\"Inglês\",\"trecho\":\"Hello\",\"trechoTraduzido\":\"Olá\"},{\"nome\":\"Japonês\",\"trecho\":\"Ohayo\",\"trechoTraduzido\":\"Bom dia\"}]}}'. USER INPUT: "

  const response = await generateText(systemPrompt + userPrompt)

  return new Response(response)
}