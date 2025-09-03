"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones de hambúrguer e fechar

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 bg-green-400 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Título */}
        <Link href="/page">
          <h1 className="text-xl font-bold cursor-pointer">OTTO</h1>
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
              <Link
                href="/app"
                className={`transition ${
                  isActive("/app") ? "text-white font-bold" : "hover:text-white"
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/Contatos"
                className={`transition ${
                  isActive("/Contatos") ? "text-white font-bold" : "hover:text-white"
                }`}
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
      {menuOpen && (
        <div className="md:hidden bg-green-400 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4">
          <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  isActive("/") ? "text-white font-bold" : "hover:text-white"
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/Contatos"
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  isActive("/Contatos") ? "text-white font-bold" : "hover:text-white"
                }`}
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                href="/aplics"
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
                className={`transition ${
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
