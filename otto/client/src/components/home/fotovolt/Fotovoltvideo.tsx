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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Seu Título Aqui</h1>
          <p className="text-lg md:text-xl">
            Aqui vai uma descrição do seu banner. Pode ser informativo ou chamativo, explicando o conteúdo.
          </p>
        </div>

        {/* Lado direito: imagem externa */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://source.unsplash.com/600x400/?nature,tech" 
            alt="Banner Exemplo" 
            className="rounded-lg shadow-lg object-cover w-full h-full max-w-md"
          />
        </div>

      </div>
      <section className="mx-auto max-w-7xl px-6 py-46">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Seção de conteúdo
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Coloque o restante do conteúdo da sua página aqui. O primeiro banner
            cobre toda a largura horizontal, com fundo verde escuro, texto à
            esquerda e imagem à direita. O segundo banner exibe duas imagens lado
            a lado.
          </p>
        </section>
        <div className="w-full bg-green-500 flex flex-col md:flex-row items-center justify-between p-9 md:p-39">
        
        {/* Lado esquerdo: título e descrição */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Seu Título Aqui</h1>
          <p className="text-lg md:text-xl">
            Aqui vai uma descrição do seu banner. Pode ser informativo ou chamativo, explicando o conteúdo.
          </p>
          
          
          <li className='inline-flex items-center justify-center rounded-2xl bg-white text-green-600 font-semibold px-8 py-4 shadow hover:bg-green-800 transition'>
            <Link href="https://www.mediafire.com/file/mfcxi13jlcjmkpg/fotovoltaico.rar/file" className='transition'>download
            </Link>

          </li>
          
        </div>

        {/* Lado direito: imagem externa */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://source.unsplash.com/600x400/?nature,tech" 
            alt="Banner Exemplo" 
            className="rounded-lg shadow-lg object-cover w-full h-full max-w-md"
          />
        </div>
         
      

         
      </div>
      <section className="mx-auto max-w-7xl px-6 py-46">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Seção de conteúdo
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Coloque o restante do conteúdo da sua página aqui. O primeiro banner
            cobre toda a largura horizontal, com fundo verde escuro, texto à
            esquerda e imagem à direita. O segundo banner exibe duas imagens lado
            a lado.
          </p>
        </section>
    </div>
  );
}
