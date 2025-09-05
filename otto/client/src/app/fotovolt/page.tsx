import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/card/Card";
import Fotovoltvideo from "@/components/home/fotovolt/Fotovoltvideo";

export const metadata = {
    title: "Otto"
  };
  
  

export default function FotovoltPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Card />
            <Fotovoltvideo />
            <Footer />
        </div>
    );
}