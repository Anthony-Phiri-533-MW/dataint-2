import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactForm from "../components/ContactForm/ContactForm";
import { ContactDetails } from "../components/ContactForm/ContactForm";

const Page = () => {
  return (
    <div className="px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
      <Navbar />
      <div className='pb-12'>
        <h3 className='text-center text-3xl font-bold'>We do the best at any anything trusted with us.</h3>
        <h4 className='text-center'>
          Ready to explore how Data Intelligence can help your business? Get in touch with our team today.
        </h4>
      </div>
      <div className='lg:flex'>
        <ContactForm />
        <ContactDetails phone='+265881973340' address='[currently online, on premises soon]' />
      </div>

      <Footer />
    </div>
  )
}

export default Page;