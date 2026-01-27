'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientSuccessStories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const testimonials = [
        {
            quote: "Data Intelligence transformed our business operations. Their predictive models reduced our operational costs by 40% while improving customer satisfaction significantly.",
            author: "Sarah Chen",
            role: "VP of Operations",
            company: "Global FinTech Corporation",
            metric: "40% Cost Reduction"
        },
        {
            quote: "The team's expertise in machine learning helped us build an AI-powered platform that became a game-changer in our industry. Exceptional partnership!",
            author: "Michael Roberts",
            role: "CEO",
            company: "E-Commerce Leader",
            metric: "3x Revenue Growth"
        },
        {
            quote: "Within 6 months, their data engineering solutions enabled us to process 10x more data while reducing infrastructure costs. Highly professional and responsive.",
            author: "Dr. Lisa Wong",
            role: "Chief Technology Officer",
            company: "Healthcare Analytics Provider",
            metric: "10x Data Volume"
        },
        {
            quote: "Their approach to ethical AI and bias mitigation ensured our solutions were not only effective but also responsible. Truly innovative team.",
            author: "James Peterson",
            role: "Innovation Director",
            company: "Tech Manufacturing",
            metric: "Industry Leadership"
        }
    ];

    return (
        <motion.div 
            className='pb-16' 
            data-testid="client-success"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className='text-center pb-12' variants={itemVariants}>
                <motion.h2 
                    className='text-3xl md:text-4xl font-bold text-[#001538] mb-4'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    Success Stories from Our Clients
                </motion.h2>
                <motion.p 
                    className='text-lg text-gray-600 max-w-2xl mx-auto'
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Discover how leading organizations have leveraged our solutions to achieve breakthrough results
                </motion.p>
            </motion.div>

            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
                variants={containerVariants}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index}
                        className='p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#3B82F6]'
                        variants={itemVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        {/* Quote Icon */}
                        <motion.div 
                            className='text-4xl text-[#3B82F6] mb-4 opacity-30'
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        >
                            "
                        </motion.div>

                        {/* Quote */}
                        <motion.p 
                            className='text-gray-700 mb-4 italic leading-relaxed text-sm'
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {testimonial.quote}
                        </motion.p>

                        {/* Metric */}
                        <motion.div 
                            className='mb-4 p-3 bg-blue-50 rounded-lg'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className='text-lg font-bold text-[#3B82F6]'>
                                {testimonial.metric}
                            </p>
                        </motion.div>

                        {/* Author Info */}
                        <motion.div 
                            className='border-t pt-4'
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <p className='font-bold text-[#001538]'>
                                {testimonial.author}
                            </p>
                            <p className='text-sm text-gray-600'>
                                {testimonial.role}
                            </p>
                            <p className='text-xs text-blue-600 font-medium mt-1'>
                                {testimonial.company}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default ClientSuccessStories
