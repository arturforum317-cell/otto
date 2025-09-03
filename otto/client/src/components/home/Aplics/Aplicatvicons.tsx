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
          content="Dois quadrados com bordas arredondadas contendo imagens"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">APLICATIVOS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Primeiro Quadrado linkado */}
          <Link href="/fotovolt" className="block">
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
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

          {/* Segundo Quadrado linkado */}
          <Link href="/Ia" className="block">
            <div className="bg-white rounded-2xl border-2 border-green-200 p-6 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
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
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          <p>Grid de quadrados com imagens - Next.js e Tailwind CSS</p>
        </footer>
      </div>
    </>
  );
};

export default GridSquares;
