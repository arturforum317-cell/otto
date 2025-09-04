"use client";

export default function BannersPage() {
  return (
    <div className="flex flex-col items-center bg-gray-50  px-4">
      
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
<div className="flex flex-col md:flex-row items-center max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden h-[450px] mb-12">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    alt="Banner 1"
    className="w-full md:w-1/2 h-full object-cover"
  />
  <div className="p-6 md:w-1/2 h-full flex flex-col justify-center text-center md:text-right">
    <h2 className="text-3xl font-bold mb-4 text-green-700">Inovação Sustentável</h2>
    <p className="text-gray-700 text-lg mb-6">
      Usamos tecnologia para criar um impacto ambiental positivo. Descubra como nossas soluções ajudam a construir um futuro mais limpo.
    </p>
    {/* Botões alinhados à direita */}
    <div className="flex flex-col gap-4 items-center md:items-end">
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition w-full max-w-[200px]">
        Download
      </button>
      <button className="bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded transition w-full max-w-[200px]">
        Saiba mais
      </button>
    </div>
  </div>
</div>

{/* Banner 2 - Imagem direita, botões verticais, altura maior */}
<div className="flex flex-col md:flex-row-reverse items-center max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden h-[450px] mb-12">
  <img
    src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80"
    alt="Banner 2"
    className="w-full md:w-1/2 h-full object-cover"
  />
  <div className="p-6 md:w-1/2 h-full flex flex-col justify-center text-center md:text-left">
    <h2 className="text-3xl font-bold mb-4 text-green-700">Tecnologia Inteligente</h2>
    <p className="text-gray-700 text-lg mb-6">
      Integramos inteligência artificial para oferecer soluções eficazes e acessíveis. Conheça nossas ferramentas avançadas.
    </p>
    {/* Botões verticais */}
    <div className="flex flex-col gap-4 items-center md:items-start">
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition w-full max-w-[200px]">
        Download
      </button>
      <button className="bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded transition w-full max-w-[200px]">
        Saiba mais
      </button>
    </div>
  </div>
</div>


      {/* Banner 3 - Imagem esquerda, título à direita */}
      <div
    className="w-screen h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white mb-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
    }}
  >
    <div className="bg-black/40 p-8 rounded-lg text-center">
      <h2 className="text-4xl font-bold mb-4">Transformando o Futuro</h2>
      <p className="text-lg max-w-xl">
        Estamos comprometidos em transformar o futuro com inovação,
        responsabilidade e paixão pelo que fazemos.
      </p>
    </div>
  </div>
    </div>
  );
}
