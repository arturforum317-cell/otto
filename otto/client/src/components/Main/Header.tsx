// components/Header.js
export default function Header() {
    return (
      <header className="sticky top-0 bg-green-400 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Meu Header</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Sobre</a></li>
              <li><a href="#" className="hover:text-green-600">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  