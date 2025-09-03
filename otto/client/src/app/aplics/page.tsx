import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/card/Card";

export default function AplicPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Card />
            <Footer />
        </div>
    );
}