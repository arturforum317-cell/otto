import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/card/Card";
import Abouttext from "@/components/home/About/Abouttext";

export default function aboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Card />
            <Abouttext/>
            <Footer />
        </div>
    );
}