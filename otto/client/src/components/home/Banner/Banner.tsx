"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from "@/img/1.png";
import Image2 from "@/img/2.png";


export default function Banners(props: { className?: string }) {
  return (
    <div className="flex flex-col w-full gap-8 mt-12"> {/* ← adicionei mt-12 */}
      {/* Banner 1 - botão à esquerda */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <Image src={Image1} alt="Banner 1" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center z-10 w-full p-4 md:pl-8">
          <div className="p-6">
            <div className="text-white text-left text-lg md:text-xl lg:text-2xl max-w-2xl mb-6 drop-shadow-lg">
              Descubra o melhor posicionamento e dimensionamento para o seu sistema solar com nosso software intuitivo.
            </div>
            <Link href="/fotovolt">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors">
                Comprar
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner 2 - botão à direita */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] overflow-hidden">
        <Image src={Image2} 
  alt="Banner 2" 
  fill 
  className="object-cover bg-transparent" />
        <div className="absolute inset-0 flex flex-col items-end justify-center z-10 w-full p-4 md:pr-8">
          <div className="p-6 max-w-2xl text-right">
            <div className="text-white text-lg md:text-xl lg:text-2xl mb-6 drop-shadow-lg">
              Nosso software usa IA avançada para identificar e destacar animais automaticamente.
            </div>
            <Link href="/ia">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors">
                Comprar
              </button>
            </Link>
          </div>
        </div>
      </div>





    </div>
  );
}
