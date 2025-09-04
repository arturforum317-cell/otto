// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
                  alt="Paisagem natural com montanhas e lago"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                Beleza natural das montanhas e lagos.
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
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
                  alt="Vista aérea de uma cidade moderna"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                Panorama urbano de uma metrópole movimentada.
              </p>
            </div>
          </Link>

          {/* Bloco 3 - Botão de "+" */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 shadow-md flex items-center justify-center h-full min-h-[400px] text-6xl text-gray-500 cursor-pointer transition duration-300">
            +
          </div>
        </div>

        <footer className="mt-12 text-gray-500 text-sm text-center">
          <p>Aplicativos - Layout horizontal</p>
        </footer>
      </div>
    </>
  );
};

export default GridSquares;
