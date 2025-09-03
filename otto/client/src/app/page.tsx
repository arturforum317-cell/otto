import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Card from "@/components/home/card/Card";
import Banner from "@/components/home/Banner/Banner";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Banner className="flex-grow" />
            <Card />
            <Footer />
        </div>
    );
}