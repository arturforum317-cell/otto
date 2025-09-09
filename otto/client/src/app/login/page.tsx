import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Cadass from "@/components/home/Cadas/Cadass";



export default function login() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

             <Cadass/>

            <Footer />
        </div>
    );
}