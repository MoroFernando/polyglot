"use client";

import IdiomaTag from "@/components/IdiomaTag";
import Loader from "@/components/Loader";
import { useState } from "react";

const page = () => {

  const [texto, setTexto] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try{
      const response = await fetch("/api/gemini", {
        method: 'POST',
        body: texto
      });
      const responseText = await response.json();
      setTranslation(responseText);
    } catch (err) {
      console.error(`Erro na tradução ${err}`)
    }
    setIsLoading(false);
  }

  return (
    <section className="flex flex-col flex-grow w-full justify-center items-center gap-4 px-5 py-10">
      <h1 className="font-black font-featherBold text-center sm:text-7xl text-5xl tracking-wide">
        Tradutor
        <span className="text_violet_gradient"> Inteligente</span>
      </h1>
      <p className="desc text-center mb-10">
        Insirá um texto que o tradutor irá identificar o idioma original e traduzi-lo para o Português.
      </p>

      <div className="flex w-full sm:flex-row sm:max-w-[1000px] flex-col justify-center gap-10">
        <div className="flex flex-col sm:w-1/2 w-full">
          <form className="flex flex-col flex-grow gap-5"
            onSubmit={handleSubmit}
          >
            <textarea name="texto" id="texto" className="flex-grow rounded-lg bg-white drop-shadow-md resize-none py-4 px-8 min-h-40 focus:outline-violet-700"
              placeholder="Escreva aqui..."
              required={true}
              onChange={(e) => setTexto(e.target.value)}
            >
            </textarea>
            {isLoading ? 
              <Loader /> : 
              <button className="text-white font-medium violet_gradient rounded-lg h-12 drop-shadow-md hover:opacity-80 transition-all"
                type="submit"
                disabled={isLoading} 
              >
                Traduzir
              </button>
            }
          </form>
        </div>

        {translation && 
          <div className="flex flex-col text-gray-400 bg-gray-200 drop-shadow-sm rounded-lg pt-8 px-8 pb-4 overflow-y-auto h-[240px] sm:w-1/2 w-full">
            <div className="flex gap-1">
              {translation.resposta.idiomas.map(idioma => (
              <IdiomaTag idioma={idioma}/>
              ))}
            </div>
            <span className="break-words mt-4">{translation.resposta.traducao}</span>
          </div>
        }
      </div>
    </section>
  )
}

export default page