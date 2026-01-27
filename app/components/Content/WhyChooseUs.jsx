'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUs = () => {
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const reasons = [
        {
            icon: '🎯',
            title: 'Proven Track Record',
            description: 'Successfully delivered 50+ projects across diverse industries with consistent results exceeding client expectations'
        },
        {
            icon: '👥',
            title: 'Expert Team',
            description: 'PhDs, specialists, and industry veterans with 200+ combined years of data science and engineering expertise'
        },
        {
            icon: '⚡',
            title: 'Rapid Deployment',
            description: 'Agile methodology enabling quick turnaround times without compromising on quality or robustness'
        },
        {
            icon: '🔒',
            title: 'Enterprise Security',
            description: 'GDPR-compliant, ISO-certified infrastructure with military-grade encryption and data privacy protection'
        },
        {
            icon: '📈',
            title: 'Measurable ROI',
            description: 'Average 35-40% cost reduction and 2-3x revenue increase for our clients within 12 months'
        },
        {
            icon: '🤝',
            title: '24/7 Support',
            description: 'Dedicated support team and continuous optimization ensuring your solutions keep performing at peak levels'
        }
    ];

    return (
        <motion.div 
            className='text-center pb-16' 
            data-testid="why-choose-us"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className='pb-12' variants={itemVariants}>
                <motion.h2 
                    className='text-3xl md:text-4xl font-bold text-[#001538] mb-4'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    Why Choose Data Intelligence?
                </motion.h2>
                <motion.p 
                    className='text-lg text-gray-600 max-w-2xl mx-auto'
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    We combine technical excellence with strategic thinking to deliver solutions that truly transform your business
                </motion.p>
            </motion.div>

            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                variants={containerVariants}
            >
                {reasons.map((reason, index) => (
                    <motion.div 
                        key={index} 
                        className='p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow'
                        variants={itemVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <motion.div 
                            className='text-5xl mb-4'
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {reason.icon}
                        </motion.div>
                        <h3 className='text-xl font-bold text-[#001538] mb-2'>
                            {reason.title}
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default WhyChooseUs
