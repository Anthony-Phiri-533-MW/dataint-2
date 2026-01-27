'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Divider } from './Divider';
import { SocialIcons } from './SocialIcons'; 
import Link from 'next/link';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <Divider />
            <motion.div className='lg:flex lg:justify-between lg:space-x-12 from-current mb-8' variants={itemVariants}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className='mb-8 lg:mb-0'
                >
                    <motion.h1 
                        className='font-bold text-3xl'
                        whileHover={{ color: "#3B82F6" }}
                        transition={{ duration: 0.3 }}
                    >
                        DataInt
                    </motion.h1>
                    <p className='text-gray-600 text-sm mt-1'>Data Intelligence</p>
                    <p className='text-gray-600 text-xs mt-3 max-w-xs leading-relaxed'>
                        Transforming data into strategic advantage through cutting-edge AI, machine learning, and data engineering solutions.
                    </p>
                </motion.div>

                <div className='lg:flex lg:space-x-16'>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className='mb-8 lg:mb-0'
                    >
                        <h1 className='font-bold text-xl mb-4'>Company</h1>
                        <ul className='space-y-2'>
                            <Link href='/'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Home
                                </motion.li>
                            </Link>
                            <Link href='/aboutus'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    About Us
                                </motion.li>
                            </Link>
                            <Link href='/ourwork'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Projects & Work
                                </motion.li>
                            </Link>
                            <Link href='/contact'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Contact
                                </motion.li>
                            </Link>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className='mb-8 lg:mb-0'
                    >
                        <h1 className='font-bold text-xl mb-4'>Services</h1>
                        <ul className='space-y-2'>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                ML & AI Solutions
                            </motion.li>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Data Engineering
                            </motion.li>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Analytics & Insights
                            </motion.li>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Custom Development
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className='mb-8 lg:mb-0'
                    >
                        <h1 className='font-bold text-xl mb-4'>Resources</h1>
                        <ul className='space-y-2'>
                            <Link href='/ourwork'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Models & Tools
                                </motion.li>
                            </Link>
                            <Link href='/ourwork'>
                                <motion.li
                                    className='text-gray-600 text-sm hover:text-gray-900'
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Research Papers
                                </motion.li>
                            </Link>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Documentation
                            </motion.li>
                            <motion.li
                                className='text-gray-600 text-sm hover:text-gray-900'
                                whileHover={{ color: "#3B82F6", x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Blog
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
            <SocialIcons />
        </motion.footer>
    )
}

export default Footer
