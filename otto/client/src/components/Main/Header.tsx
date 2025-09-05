"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 bg-green-400 shadow-md z-50 h-16">
  <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
           <Image
             src="/fish.png"  // imagem dentro da pasta public
             alt="Ícone OTTO"
             width={70}      // w-6 = 24px
             height={75}     // h-6 = 24px
             className="object-contain"
           />
           <h1 className="text-x2 font-bold">OTTO</h1>
        </Link>
        {/* Botão do menu no mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
         <li>
             <Link href="/" className="transition hover:text-white">
             Início
          </Link>
           
           </li>
            

            <li>
              <Link 
                href="#footer" 
                scroll={true} 
                className="transition hover:text-white"
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                href="/aplics"
                className={`transition ${
                  isActive("/aplics") ? "text-white font-bold" : "hover:text-white"
                }`}
              >
                Aplicativos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition ${
                  isActive("/about") ? "text-white font-bold" : "hover:text-white"
                }`}
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navegação mobile */}
      {/* Navegação mobile */}
{menuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-green-400 shadow-md z-40">
    <ul className="flex flex-col divide-y divide-white/40">
      <li className="text-center md:text-left">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 transition ${
            isActive("/") ? "text-white font-bold" : "hover:text-white"
          }`}
        >
          Início
        </Link>
      </li>
      <li className="text-center md:text-left">
        <Link
          href="#footer"
          onClick={() => setMenuOpen(false)}
          className="block py-3 transition hover:text-white"
        >
          Contatos
        </Link>
      </li>
      <li className="text-center md:text-left">
        <Link
          href="/aplics"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 transition ${
            isActive("/aplics") ? "text-white font-bold" : "hover:text-white"
          }`}
        >
          Aplicativos
        </Link>
      </li>
      <li className="text-center md:text-left">
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 transition ${
            isActive("/about") ? "text-white font-bold" : "hover:text-white"
          }`}
        >
          Sobre
        </Link>
      </li>
    </ul>
  </div>
)}
    </header>
  );
}
