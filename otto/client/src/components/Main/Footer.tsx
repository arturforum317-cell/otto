// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="bg-green-400 text-white">
      {/* Linha branca superior */}
      <div className="w-full h-[1px] bg-white opacity-40 mb-5"></div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Coluna 1 - Institucional */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Institucional</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">Sobre Nós</a></li>
            <li><a href="/about" className="hover:underline">Termos de Uso</a></li>
            <li><a href="/about" className="hover:underline">Política de Privacidade</a></li>
            <li><a href="/about" className="hover:underline">Carreiras</a></li>
          </ul>
        </div>

        {/* Coluna 2 - Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: Artuforum317@gmail.com</li>
          </ul>
        </div>

        {/* Coluna 3 - Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-30 mt-6 pt-3 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Otto. Todos os direitos reservados.
      </div>
    </footer>
  );
}
