import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Abouttext from "@/components/home/About/Abouttext";

export default function aboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Abouttext/>
            <Footer />
        </div>
    );
}