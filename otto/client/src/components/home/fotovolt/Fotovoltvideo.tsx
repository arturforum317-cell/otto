// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Vídeo */}
        <div className="w-full">
          <video
            className="w-full h-auto"
            controls
            src="/video-exemplo.mp4" // coloque seu vídeo na pasta public
          />
        </div>

        {/* Descrição */}
        <div className="p-6">
          <h1 className="text-gray-5 text-gray-950 font-bold mb-4">Fotovolt</h1>
          <p className="text-gray-700 mb-6">
            Aqui vai a descrição do vídeo. Você pode colocar informações relevantes sobre o conteúdo,
            instruções ou qualquer detalhe que queira.
          </p>

          {/* Botão de Download */}
          <a
            href="https://www.mediafire.com/file/mfcxi13jlcjmkpg/fotovaoltaico.rar/file" // mesmo vídeo ou outro arquivo para download
            download
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Downloaa
          </a>
        </div>
      </div>
    </div>
  );
}
