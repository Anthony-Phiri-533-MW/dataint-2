'use client'

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
// import { IoClose } from 'react-icons/io5';

const models = [
    { title: 'Model A', description: 'Description of Model A', link: '#', details: 'Details about Model A', downloadLink: '#' },
    { title: 'Model B', description: 'Description of Model B', link: '#', details: 'Details about Model B', downloadLink: '#' },
    { title: 'Model C', description: 'Description of Model C', link: '#', details: 'Details about Model C', downloadLink: '#' },
];

const papers = [
    { title: 'Paper A', authors: 'Author A, Author B', link: '#' },
    { title: 'Paper B', authors: 'Author C, Author D', link: '#' },
    { title: 'Paper C', authors: 'Author E, Author F', link: '#' },
];

const projects = [
    { title: 'Project A', description: 'Description of Project A', link: '#', timePeriod: '2022-2023', companies: 'Company X, Company Y' },
    { title: 'Project B', description: 'Description of Project B', link: '#', timePeriod: '2021-2022', companies: 'Company A, Company B' },
    { title: 'Project C', description: 'Description of Project C', link: '#', timePeriod: '2020-2021', companies: 'Company M, Company N' },
];

const OurWork = () => {
    const [selectedCategory, setSelectedCategory] = useState('projects');
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen">
            <Navbar />

            <div className="flex flex-col lg:flex-row flex-1">
                {/* Sidebar */}
                <aside className="lg:w-64 bg-gray-100 p-6 lg:sticky lg:top-6 lg:h-screen">
                    <h2 className="text-2xl font-semibold mb-6">Filter By</h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => setSelectedCategory('projects')}
                            className={`w-full py-2 px-4 text-left rounded-lg ${selectedCategory === 'projects' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500'}`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setSelectedCategory('models')}
                            className={`w-full py-2 px-4 text-left rounded-lg ${selectedCategory === 'models' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500'}`}
                        >
                            Models
                        </button>
                        <button
                            onClick={() => setSelectedCategory('papers')}
                            className={`w-full py-2 px-4 text-left rounded-lg ${selectedCategory === 'papers' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500'}`}
                        >
                            Papers
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:pl-0">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Work</h1>

                    {selectedCategory === 'models' && (
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Models</h2>
                            <ul className="space-y-4">
                                {models.map((model) => (
                                    <li key={model.title} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-medium">{model.title}</h3>
                                        <p className="mt-2 text-gray-700">{model.description}</p>
                                        <button
                                            onClick={() => openModal(
                                                <div>
                                                    <h3 className="text-xl font-medium mb-2">{model.title}</h3>
                                                    <p className="mb-4">{model.details}</p>
                                                    <a href={model.downloadLink} className="inline-block text-blue-500 hover:underline">
                                                        Download
                                                    </a>
                                                </div>
                                            )}
                                            className="mt-2 inline-block bg-[#001538] text-[#FFFFFF] hover:underline"
                                        >
                                            Learn More
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {selectedCategory === 'papers' && (
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Papers</h2>
                            <ul className="space-y-4">
                                {papers.map((paper) => (
                                    <li key={paper.title} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-medium">{paper.title}</h3>
                                        <p className="mt-1 text-gray-600">Authors: {paper.authors}</p>
                                        <button className="mt-2 inline-block bg-[#001538] text-[#FFFFFF] hover:underline">
                                            <a href={paper.link}>
                                                Read Paper
                                            </a>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {selectedCategory === 'projects' && (
                        <section>
                            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
                            <ul className="space-y-4">
                                {projects.map((project) => (
                                    <li key={project.title} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-medium">{project.title}</h3>
                                        <p className="mt-2 text-gray-700">{project.description}</p>
                                        <button
                                            onClick={() => openModal(
                                                <div>
                                                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                                                    <p className="mb-4">Time Period: {project.timePeriod}</p>
                                                    <p className="mb-4">Companies Involved: {project.companies}</p>
                                                </div>
                                            )}
                                            className="mt-2 inline-block bg-[#001538] text-[#FFFFFF] hover:underline"
                                        >
                                            Explore Project
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </main>
            </div>

            <Footer />

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </div>
    );
};

export default OurWork;
