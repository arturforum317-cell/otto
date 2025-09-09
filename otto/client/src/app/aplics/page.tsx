import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/Card/Card";
import Aplicatvicons from "@/components/home/Aplics/Aplicatvicons";
export const metadata = {
    title: "Otto"
  };
  
export default function AplicPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Aplicatvicons />
            <Card />
            <Footer />
        </div>
    );
}