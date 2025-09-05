import Image from "next/image";

export default function Page() {
    return (
      <main className="min-h-screen bg-white">
        {/* Banner topo full-width */}
        <section className="w-full bg-green-700 text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Seu títu
              </h1>
              <p className="text-base md:text-lg opacity-90">
                Uma brer.
              </p>
              
              
            </div>
  
            {/* Imagem à direita */}
            <div className="w-full flex justify-center md:justify-end">
              <img
                src="/ere.gif"
                alt="Ilustração do produto"
                width={500}   // largura obrigatória
              height={500}  // altura obrigatória
              className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Conteúdo abaixo (exemplo) */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Seçã
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Coloque .
          </p>
        </section>
  
        {/* Segundo banner com duas imagens lado a lado */}
        <section className="w-full bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full flex justify-center">
              <img
                src="qwe.jpeg"
                alt="Imagem 1"
                className="w-full max-w-md h-auto rounded-2xl shadow-md object-cover"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                src="asd.png"
                alt="Imagem 2"
                className="w-full max-w-md h-auto rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Conteúdo abaixo (exemplo) */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Seçã
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Col.
          </p>
        </section>
  
        {/* Botão de Download no final */}
        <section className="w-full py-12 flex justify-center bg-white">
          <a
            href="/meu-arquivo.pdf"
            download
            className="inline-flex items-center justify-center rounded-2xl bg-green-700 text-white font-semibold px-8 py-4 shadow hover:bg-green-800 transition"
          >
            Download
          </a>
        </section>
      </main>
    );
  }
  