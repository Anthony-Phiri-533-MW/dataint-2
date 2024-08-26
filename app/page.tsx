import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/Content/MainContent";
import MinorContent from "./components/Content/MinorContent";
import MinContent from "./components/Content/MinContent";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
      <Navbar />
      <Hero />
      <MainContent />
      <MinorContent />
      <MinContent />
      <Footer />
    </main>
  );
}

/* Rectangle 1 */

// position: absolute;
// width: 82px;
// height: 80px;
// left: 0px;
// top: 0px;


