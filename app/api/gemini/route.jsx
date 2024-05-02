import generateText from "@/utils/gemini/generateText";

export const POST = async (req) => {
  
  const userPrompt = await req.text();
  const systemPrompt = "Voce é um identificador de idiomas. Sua função é identificar os idiomas do USER INPUT e responder no formato json contendo para chave o nome do idioma detectado escrito em portugues do brasil e o valor a traduçao do trecho correspondente. Cada texto poderá ter mais de um idioma contido. E caso o idioma n seja reconhecido considere o idioma como 'Desconnhecido' e o texto do trecho como '[Desconhecido]'. Exemplo de saida para a frase 'Hello, ohayo' seria '{\"resposta\":{\"traducao\":\"Olá, bom dia\",\"idiomas\":[{\"nome\":\"Inglês\",\"trecho\":\"Hello\",\"trechoTraduzido\":\"Olá\"},{\"nome\":\"Japonês\",\"trecho\":\"Ohayo\",\"trechoTraduzido\":\"Bom dia\"}]}}'. USER INPUT: "

  const response = await generateText(systemPrompt + userPrompt)

  return new Response(response)
}