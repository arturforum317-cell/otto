"use client";

export default function About() {
  return (
    <div className="flex flex-col text-gray-800">
      {/* Seção 1 - Imagem de fundo */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center text-white px-6 py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-20% p-10 rounded-xl max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Acreditamos na força da inovação para transformar o mundo.
            Energia limpa, acessível e com tecnologia de ponta.
          </p>
        </div>
      </section>

      {/* Seção 2 - Fundo com cor sólida + efeitos */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-green-400 relative overflow-hidden">
        {/* Efeitos de luz circulares */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-2xl opacity-20 animate-ping"></div>

        <div className="max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
            Nosso Propósito
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Facilitamos o acesso a soluções inteligentes em energia renovável e tecnologia.
            Pequenas atitudes podem transformar o planeta.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Combinamos <span className="font-semibold">IA</span> e
            <span className="font-semibold"> softwares avançados</span> para eficiência e impacto positivo.
          </p>
        </div>
      </section>

      {/* Seção 3 - Gradiente de fundo */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-r from-green-400 via-green-100 to-green-400">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
            Olhando para o Futuro
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Estamos em constante evolução, integrando tecnologia, meio ambiente e praticidade.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            A cada passo, buscamos um futuro mais limpo, inteligente e sustentável.
          </p>
        </div>
      </section>
    </div>
  );
}
