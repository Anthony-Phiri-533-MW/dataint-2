'use client'

import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactForm from "../components/ContactForm/ContactForm";
import { ContactDetails } from "../components/ContactForm/ContactForm";

const Page = () => {
  return (
    <div className="px-6 md:px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          We do the best at anything trusted with us.
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Ready to explore how Data Intelligence can help your business?
          <br />
          Get in touch with our team today.
        </p>
      </section>

      {/* Two-column layout */}
      <section className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 xl:col-span-8">
          <ContactForm />
        </div>

        <aside className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-4">
          <ContactDetails
            phone="+265 881 973 340"
            address="[currently online, on premises soon]"
          />
        </aside>
      </section>

      <Footer />
    </div>
  )
}

export default Page;