'use client'
//import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/Content/MainContent";
import MinorContent from "./components/Content/MinorContent";
import MinContent from "./components/Content/MinContent";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <motion.main 
      className="px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <Hero />
      <MainContent />
      <MinorContent />
      <MinContent />
      <Footer />
    </motion.main>
  );
}


