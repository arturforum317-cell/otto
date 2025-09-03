"use client";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-green-50 text-gray-800">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
          Sobre Nós
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Nosso objetivo é facilitar o acesso a soluções inteligentes em energia renovável e tecnologia.
          Acreditamos que pequenas atitudes podem transformar o futuro do planeta, e por isso desenvolvemos
          ferramentas que unem praticidade, inovação e sustentabilidade.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Combinamos <span className="font-semibold">inteligência artificial</span> e 
          <span className="font-semibold"> softwares avançados</span> para oferecer aos nossos clientes
          experiências únicas, ajudando tanto pessoas quanto empresas a alcançarem eficiência e impacto positivo.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Estamos em constante evolução, buscando sempre novas formas de integrar tecnologia,
          meio ambiente e praticidade no dia a dia.
        </p>
      </div>
    </div>
  );
}
