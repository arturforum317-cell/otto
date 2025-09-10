import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Aplicatvicons from "@/components/home/Aplics/Aplicatvicons";

export default function AplicPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Aplicatvicons />
            <Footer />
        </div>
    );
}