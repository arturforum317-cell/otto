// pages/index.js
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="w-full bg-green-500 flex flex-col md:flex-row items-center justify-between p-9 md:p-39">
        
        {/* Lado esquerdo: título e descrição */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fotovolt</h1>
          <p className="text-lg md:text-xl">
            Um aplicativo que faz a simulação de instalação de paines solarés de forma divertida e intuitiva.
          </p>
        </div>

        {/* Lado direito: imagem externa */}
        <div className="md:w-1/2 flex justify-center">
  <img 
    src="/asdsdfgfg.gif" 
    alt="Banner Exemplo" 
    className="rounded-lg shadow-lg object-cover w-full h-full max-w-2xl"
  />
</div>
      </div>
      <section className="mx-auto max-w-8xl px-6 py-46">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            O quê você vai ver nesse aplicativo
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            O fotovolt é um simulador que tem como intuito auxiliar no apredizado de forma divertida a montagem de paineis fotovoltaicos, além de ser extremamente didatico e facil também possui todas as informações necessecarias.
          </p>
        </section>
        <div className="w-full bg-green-500 flex flex-col md:flex-row items-center justify-between p-9 md:p-39">
        
        {/* Lado esquerdo: título e descrição */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Adiquira seu aplicativo</h1>
          <p className="text-lg md:text-xl">
            Você pode estar testando o produto final onde poderar usar de todo o conteudo
            a versão teste conta com um o conteudo base, mas que mesmo assim possibilita a experiencia.
          </p>
          
   
          <ul className="flex gap-4">
  <li className="inline-flex items-center justify-center rounded-2xl bg-white text-green-600 font-semibold px-8 py-4 shadow hover:bg-green-800 transition">
    <Link
      href="https://www.mediafire.com/file/mfcxi13jlcjmkpg/fotovoltaico.rar/file"
      className="transition"
    >
      Comprar
    </Link>
  </li>

  <li className="inline-flex items-center justify-center rounded-2xl bg-white text-green-600 font-semibold px-8 py-4 shadow hover:bg-green-800 transition">
    <Link
      href="https://www.mediafire.com/file/mfcxi13jlcjmkpg/fotovoltaico.rar/file"
      className="transition"
    >
      Testar
    </Link>
  </li>
</ul>

        </div>

        {/* Lado direito: imagem externa */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/Gemini_Generated_Image_ge5hw4ge5hw4ge5h.png" 
            alt="Banner Exemplo" 
            className="rounded-lg shadow-lg object-cover w-full h-full max-w-md"
          />
        </div>
         
      

         
      </div>
      <section className="mx-auto max-w-7xl px-6 py-46">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Aprendizado de forma divertida
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            A melhor forma de aprender é sempre praticando então nada melhor do que um aplicativo que deixa esse aprendizado divertido.
          </p>
        </section>
    </div>
  );
}
