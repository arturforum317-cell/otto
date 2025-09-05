// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

const GridSquares = () => {
  return (
    
    <>
    
      <Head>
        <title>APLICATIVOS</title>
        <meta
          name="description"
          content="Blocos horizontais com botão de adicionar"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
  <h1 className="text-3xl font-bold text-gray-800 mb-8">APLICATIVOS</h1>

  <section className="mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
      Veja e experimente um dos nossos aplicativos
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      Selecione abaixo o aplicativo do seu desejo, você pode estar testando antes de adquirir.
    </p>
  </section>
        {/* Linha com três blocos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          
          {/* Bloco 1 - Fotovolt */}
          <Link href="/fotovolt" className="block">
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer h-full flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                Fotovolt
              </h2>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                <img
                  src="/Gemini_Generated_Image_hzm56khzm56khzm5.png"
                  alt="Paisagem natural com montanhas e lago"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                Simulador de instalação de painéis solares.
              </p>
            </div>
          </Link>

          {/* Bloco 2 - IA.BIXO */}
          <Link href="/Ia" className="block">
            <div className="bg-white rounded-2xl border-2 border-green-200 p-6 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer h-full flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
                IA.BIXO
              </h2>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                <img
                  src="/Gemini_Generated_Image_nnolwcnnolwcnnol.png"
                  alt="Vista aérea de uma cidade moderna"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                Aplicativo que detectar animais.
              </p>
            </div>
          </Link>

          {/* Bloco 3 - Botão de "+" */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 shadow-md flex items-center justify-center h-full min-h-[400px] text-6xl text-gray-500 cursor-pointer transition duration-300">
            +
          </div>
        </div>

        <footer className="mt-12 text-gray-500 text-sm text-center">
          <p>Em breve mais aplicativos</p>
        </footer>
      </div>
    </>
  );
};

export default GridSquares;
