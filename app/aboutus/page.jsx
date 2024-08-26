import React from 'react'
import Image from 'next/image';
import SampleImg from "../../public/next.svg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const teamMembers = [
    { name: 'Alice Johnson', src: SampleImg  },
    { name: 'Bob Smith', src:  SampleImg  },
    { name: 'Charlie Brown', src:  SampleImg  }
];

const page = () => {
    return (
        <div className="px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
            <Navbar />
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Vision</h2>
                <p className="text-lg">
                    To redefine the future of technology by harnessing the power of data. At Data Intelligence, we envision a world where artificial intelligence and machine learning drive unprecedented innovation, enabling businesses to unlock new possibilities and achieve transformative insights through intelligent data solutions.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Mission</h2>
                <p className="text-lg">
                    Our mission is to be the leading force in data excellence by delivering state-of-the-art artificial intelligence and machine learning solutions. We are committed to advancing the field of data acquisition, processing, and big data engineering, while developing robust, data-driven software that empowers our clients to make informed decisions and achieve their strategic objectives.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Meet the Team</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center">
                            <Image
                                src={member.src}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                            <p className="mt-2 text-lg font-medium">{member.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page