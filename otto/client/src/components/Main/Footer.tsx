// components/Footer.tsx
export default function Footer() {
    return (
      
      <footer className=" bg-green-400 text-withe">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 ">
            <p className="text-sm">
              © {new Date().getFullYear()} SuaMarca. Todos os direitos reservados.
            </p>
  
          </div>
        </div>
      </footer>

    );
  }
  