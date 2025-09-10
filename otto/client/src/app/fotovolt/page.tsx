import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Fotovoltvideo from "@/components/home/fotovolt/Fotovoltvideo";


  

export default function FotovoltPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Fotovoltvideo />
            <Footer />
        </div>
    );
}