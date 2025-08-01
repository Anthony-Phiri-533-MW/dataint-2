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
            <motion.div className='lg:flex lg:justify-between from-current' variants={itemVariants}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1 
                        className='font-bold text-3xl'
                        whileHover={{ color: "#3B82F6" }}
                        transition={{ duration: 0.3 }}
                    >
                        DataInt
                    </motion.h1>
                    <p>Data Intelligence</p>
                </motion.div>

                <div className='lg:flex lg:space-x-4'>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className='font-bold text-xl'>Company</h1>
                        <ul>
                            <Link href='/aboutus'>
                                <motion.li
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    About Us
                                </motion.li>
                            </Link>
                            <Link href='/ourwork'>
                                <motion.li
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Projects
                                </motion.li>
                            </Link>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className='font-bold text-xl'>Resources</h1>
                        <ul>
                            <Link href='/ourwork'>
                                <motion.li
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Models
                                </motion.li>
                            </Link>
                            <Link href='/ourwork'>
                                <motion.li
                                    whileHover={{ color: "#3B82F6", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Papers
                                </motion.li>
                            </Link>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
            <SocialIcons />
        </motion.footer>
    )
}

export default Footer
