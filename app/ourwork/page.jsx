'use client'

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
// import { IoClose } from 'react-icons/io5';

const models = [
    { 
        title: 'Predictive Analytics Engine', 
        description: 'Advanced machine learning model for time-series forecasting and trend analysis', 
        link: '#', 
        details: 'Our flagship predictive analytics engine utilizes LSTM neural networks and ensemble methods to deliver 95%+ accuracy in financial forecasting, inventory optimization, and demand prediction. Built with production-grade infrastructure.', 
        downloadLink: '#' 
    },
    { 
        title: 'Customer Churn Prediction Model', 
        description: 'Binary classification model identifying customers at risk of leaving', 
        link: '#', 
        details: 'This model analyzes customer behavior patterns, transaction history, and engagement metrics to predict churn with 92% precision. Enables proactive retention strategies and personalized interventions.', 
        downloadLink: '#' 
    },
    { 
        title: 'Anomaly Detection System', 
        description: 'Real-time detection of unusual patterns in operational data', 
        link: '#', 
        details: 'Leverages unsupervised learning to identify anomalies in system logs, network traffic, and sensor data. Reduces response time to security threats and operational issues by 70%.', 
        downloadLink: '#' 
    },
    { 
        title: 'Natural Language Processing Suite', 
        description: 'Advanced NLP models for text analysis and sentiment detection', 
        link: '#', 
        details: 'Comprehensive suite including sentiment analysis, entity recognition, and document classification. Supports 25+ languages and processes 1M+ documents daily with 88% accuracy.', 
        downloadLink: '#' 
    },
];

const papers = [
    { 
        title: 'Optimizing Large-Scale Data Pipelines: A Comparative Analysis of ETL Frameworks', 
        authors: 'Alice Johnson, Edward Lee', 
        link: '#',
        conference: 'International Conference on Big Data, 2023'
    },
    { 
        title: 'Bias Mitigation in Machine Learning Models: Techniques and Best Practices', 
        authors: 'Charlie Brown, Diana Prince', 
        link: '#',
        conference: 'AI Ethics Summit, 2023'
    },
    { 
        title: 'Real-Time Anomaly Detection Using Federated Learning Approaches', 
        authors: 'Bob Smith, Alice Johnson', 
        link: '#',
        conference: 'International Conference on Machine Learning, 2023'
    },
    { 
        title: 'Explainable AI for Enterprise Decision Systems', 
        authors: 'Diana Prince, Charlie Brown', 
        link: '#',
        conference: 'Data Science World, 2023'
    },
];

const projects = [
    { 
        title: 'Financial Services Fraud Detection Platform', 
        description: 'Implemented real-time fraud detection system preventing $50M+ in fraudulent transactions annually', 
        link: '#', 
        timePeriod: '2023-2024', 
        companies: 'Major Financial Institution',
        results: 'Achieved 99.2% fraud detection rate with <0.1% false positives'
    },
    { 
        title: 'E-Commerce Demand Forecasting System', 
        description: 'Built predictive analytics system improving inventory management and reducing stockouts', 
        link: '#', 
        timePeriod: '2022-2023', 
        companies: 'Leading Retail Chain',
        results: 'Reduced excess inventory by 35% and stockouts by 42%'
    },
    { 
        title: 'Healthcare Patient Risk Stratification Model', 
        description: 'Developed machine learning system identifying high-risk patients for proactive intervention', 
        link: '#', 
        timePeriod: '2022-2023', 
        companies: 'Hospital Network Group',
        results: 'Reduced readmission rates by 28% and improved patient outcomes'
    },
    { 
        title: 'Smart City IoT Analytics Platform', 
        description: 'Deployed real-time analytics platform processing 500K+ sensor data points daily', 
        link: '#', 
        timePeriod: '2021-2023', 
        companies: 'Metropolitan Government, Smart City Initiative',
        results: 'Optimized traffic flow (15% congestion reduction), improved energy efficiency by 22%'
    },
    { 
        title: 'Supply Chain Optimization Engine', 
        description: 'Implemented AI-driven supply chain optimization reducing logistics costs significantly', 
        link: '#', 
        timePeriod: '2021-2022', 
        companies: 'Global Manufacturing Corporation',
        results: 'Reduced supply chain costs by 18% and delivery time by 25%'
    },
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
                <aside className="lg:w-64 bg-gray-100 p-6 lg:sticky lg:top-6 lg:h-screen rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">Filter By</h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => setSelectedCategory('projects')}
                            className={`w-full py-2 px-4 text-left rounded-lg transition ${selectedCategory === 'projects' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500 hover:bg-gray-200'}`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setSelectedCategory('models')}
                            className={`w-full py-2 px-4 text-left rounded-lg transition ${selectedCategory === 'models' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500 hover:bg-gray-200'}`}
                        >
                            Models
                        </button>
                        <button
                            onClick={() => setSelectedCategory('papers')}
                            className={`w-full py-2 px-4 text-left rounded-lg transition ${selectedCategory === 'papers' ? 'bg-[#001538] text-[#FFFFFF]' : 'bg-white text-blue-500 hover:bg-gray-200'}`}
                        >
                            Papers
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:pl-10">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Work</h1>

                    {selectedCategory === 'models' && (
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Models</h2>
                            <ul className="space-y-4">
                                {models.map((model) => (
                                    <li key={model.title} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
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
                                            className="mt-3 inline-block bg-[#001538] text-white px-4 py-2 rounded hover:bg-[#002a5c] transition"
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
                                    <li key={paper.title} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                                        <h3 className="text-xl font-medium">{paper.title}</h3>
                                        <p className="mt-1 text-gray-600">Authors: {paper.authors}</p>
                                        <p className="mt-1 text-sm text-gray-500">Published: {paper.conference}</p>
                                        <a href={paper.link} className="inline-block bg-[#001538] text-white px-4 py-2 rounded mt-3 hover:bg-[#002a5c] transition">
                                            Read Paper
                                        </a>
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
                                    <li key={project.title} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                                        <h3 className="text-xl font-medium">{project.title}</h3>
                                        <p className="mt-2 text-gray-700">{project.description}</p>
                                        <div className="mt-2 text-sm text-gray-600">
                                            <p><strong>Time Period:</strong> {project.timePeriod}</p>
                                            <p><strong>Client:</strong> {project.companies}</p>
                                        </div>
                                        <button
                                            onClick={() => openModal(
                                                <div>
                                                    <h3 className="text-xl font-medium mb-4">{project.title}</h3>
                                                    <p className="mb-3 text-gray-700">{project.description}</p>
                                                    <div className="space-y-2 mb-4">
                                                        <p><strong>Time Period:</strong> {project.timePeriod}</p>
                                                        <p><strong>Client:</strong> {project.companies}</p>
                                                        <p><strong>Key Results:</strong></p>
                                                        <p className="text-green-600 font-medium">{project.results}</p>
                                                    </div>
                                                </div>
                                            )}
                                            className="mt-3 inline-block bg-[#001538] text-white px-4 py-2 rounded hover:bg-[#002a5c] transition"
                                        >
                                            View Details
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