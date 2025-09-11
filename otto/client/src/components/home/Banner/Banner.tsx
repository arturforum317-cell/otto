"use client";
import Link from "next/link";

export default function BannersPage() {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-4">
      
      {/* Seção inicial */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Otto
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Tecnologia para quem protege o futuro. Potencialize suas ações
          ambientais com aplicativos especializados em gestão, monitoramento e
          sustentabilidade. Soluções digitais para empresas.
        </p>
      </section>

      {/* Banner 1 */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden md:h-[450px] mb-12">
        <img
          src="/1.png"
          alt="Banner 1"
          className="w-full md:w-1/2 h-64 md:h-full object-cover"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
            simulador de instalação
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Aprenda com nosso aplicativo a montar, achar o melhor posicionamento
            e dimensionamento para o seu sistema de forma intuitiva.
          </p>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link
              href="/"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition w-full max-w-[200px] text-center"
            >
              Comprar
            </Link>
            <Link
              href="/fotovolt"
              className="bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded transition w-full max-w-[200px] text-center"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden md:h-[450px] mb-12">
        <img
          src="/4.png"
          alt="Banner 2"
          className="w-full md:w-1/2 h-64 md:h-full object-cover"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
            Ia.bixo
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Nosso aplicativo usa IA avançada para identificar e destacar animais
            automaticamente.
          </p>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link
              href="/"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition w-full max-w-[200px] text-center"
            >
              Comprar
            </Link>
            <Link
              href="/Ia"
              className="bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded transition w-full max-w-[200px] text-center"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>

      {/* Banner 3 */}
      <div
        className="w-screen h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white mb-0 overflow-hidden"
        style={{ backgroundImage: "url('/2.png')" }}
      >
        <div className="bg-black/30 p-6 md:p-8 rounded-lg text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Transformando o Futuro
          </h2>
          <p className="text-sm md:text-lg">
            Pequenas atitudes no dia a dia podem transformar o futuro do nosso
            planeta. Separar o lixo corretamente.
          </p>
        </div>
      </div>
    </div>
  );
}
