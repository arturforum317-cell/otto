import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/card/Card";
import Ialayout from "@/components/home/IA/Ialayout";
export const metadata = {
    title: "Otto"
  };
  
  

export default function FotovoltPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Card />
            <Ialayout/>
            <Footer />
        </div>
    );
}