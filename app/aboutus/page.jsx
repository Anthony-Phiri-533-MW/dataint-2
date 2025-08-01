'use client'

import React from 'react'
import Image from 'next/image';
import SampleImg from "../../public/next.svg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const teamMembers = [
    { name: 'Alice Johnson', src: SampleImg },
    { name: 'Bob Smith', src: SampleImg },
    { name: 'Charlie Brown', src: SampleImg }
];

const AboutPage = () => {
    return (
        <div className="px-6 md:px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
            <Navbar />

            <main className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-[#001538] text-center mb-12">
                    About Us
                </h1>

                {/* Vision */}
                <section className="mb-12 p-8 bg-white rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-semibold text-[#001538] mb-4">
                        Vision
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To redefine the future of technology by harnessing the power of data. 
                        At Data Intelligence, we envision a world where artificial intelligence 
                        and machine learning drive unprecedented innovation, enabling businesses 
                        to unlock new possibilities and achieve transformative insights through 
                        intelligent data solutions.
                    </p>
                </section>

                {/* Mission */}
                <section className="mb-12 p-8 bg-white rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-semibold text-[#001538] mb-4">
                        Mission
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our mission is to be the leading force in data excellence by delivering 
                        state-of-the-art artificial intelligence and machine learning solutions. 
                        We are committed to advancing the field of data acquisition, processing, 
                        and big data engineering, while developing robust, data-driven software 
                        that empowers our clients to make informed decisions and achieve their 
                        strategic objectives.
                    </p>
                </section>

                {/* Commitment to Ethics */}
                <section className="mb-12 p-8 bg-white rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-semibold text-[#001538] mb-4">
                        Commitment to Ethics
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Integrity is at the heart of everything we do. We pledge to uphold the 
                        highest ethical standards in data collection, model training, and algorithmic 
                        deployment—ensuring fairness, transparency, and accountability. Our solutions 
                        are designed to respect privacy, eliminate bias, and amplify human benefit, 
                        so that innovation never comes at the cost of society’s trust.
                    </p>
                </section>

                {/* Team */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#001538] text-center mb-8">
                        Meet the Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    width={150}
                                    height={150}
                                    className="rounded-full border-4 border-[#001538]"
                                />
                                <p className="mt-4 text-xl font-semibold text-[#001538]">
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default AboutPage;