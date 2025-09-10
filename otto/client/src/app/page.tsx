import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Banner from "@/components/home/Banner/Banner";




export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Banner />
        </main>
        <Footer />
      </div>
    );
}