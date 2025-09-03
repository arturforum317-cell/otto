export default function Page() {
    return (
      <main className="min-h-screen bg-white">
        {/* Banner topo full-width */}
        <section className="w-full bg-green-700 text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Seu título impactante aqui
              </h1>
              <p className="text-base md:text-lg opacity-90">
                Uma breve descrição do seu produto/serviço. Explique o valor
                em 1–2 frases e convide o usuário a agir.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-green-800 font-semibold px-5 py-3 shadow hover:shadow-md transition"
                >
                  Call to Action
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl ring-1 ring-white/50 text-white font-semibold px-5 py-3 hover:bg-white/10 transition"
                >
                  Saber mais
                </a>
              </div>
            </div>
  
            {/* Imagem à direita */}
            <div className="w-full flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="Ilustração do produto"
                className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Conteúdo abaixo (exemplo) */}
        <section className="mx-auto max-w-7xl px-6 py-16">
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
  
        {/* Segundo banner com duas imagens lado a lado */}
        <section className="w-full bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop"
                alt="Imagem 1"
                className="w-full max-w-md h-auto rounded-2xl shadow-md object-cover"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                alt="Imagem 2"
                className="w-full max-w-md h-auto rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Conteúdo abaixo (exemplo) */}
        <section className="mx-auto max-w-7xl px-6 py-16">
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
  