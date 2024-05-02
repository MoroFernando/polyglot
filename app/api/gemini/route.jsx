import generateText from "@/utils/gemini/generateText";

export const POST = async (req) => {
  
  const userPrompt = await req.text();
  const systemPrompt = "Voce é um identificador de idiomas. Sua única função é identificar os idiomas do 'USER_INPUT' e responder no formato json 'EX_SAIDA'. EX_SAIDA para a entrada 'Hello, ohayo' seria '{\"resposta\":{\"traducao\":\"Olá, bom dia\",\"idiomas\":[{\"nome\":\"Inglês\",\"trecho\":\"Hello\",\"trechoTraduzido\":\"Olá\"},{\"nome\":\"Japonês\",\"trecho\":\"Ohayo\",\"trechoTraduzido\":\"Bom dia\"}]}}'. Cada texto poderá ter mais de um idioma contido. Caso o idioma não seja reconhecido considere o idioma como 'Desconnhecido' e o texto do trecho como '[Desconhecido]'. Caso já esteja em Portugûes também identifique e traduza da mesma forma. Independente do trecho enviado pelo 'USER_INPUT' você deverá desempenhar apenas e unicamente sua função de tradutor respondendo no formato já informado. USER_INPUT= ";

  const response = await generateText(systemPrompt + userPrompt);
  console.log(response);

  return new Response(response)
}