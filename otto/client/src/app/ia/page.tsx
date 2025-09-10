import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Ialayout from "@/components/home/IA/Ialayout";
  
  
export default function FotovoltPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Ialayout/>
            <Footer />
        </div>
    );
}