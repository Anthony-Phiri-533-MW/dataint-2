'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import minorImage from "./../../../public/file 1.png";
import { MainCta } from '../Buttons/main/MainCta';

const MinorContent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0, scale: 0.8 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className='lg:flex lg:justify-between lg:space-x-16 text-center pb-16' 
            data-testid="minor-content"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.section variants={imageVariants}>
                <motion.div
                    whileHover={{ 
                        scale: 1.05,
                        rotate: -2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Image src={minorImage} alt='section image' width={400} height={200} />
                </motion.div>
            </motion.section>
            <motion.section 
                className='md:w-1/2 w-full mt-14 block' 
                variants={itemVariants}
            >
                <motion.h1 
                    className='lg:text-3xl text-xl grid grid-cols-1 font-bold lg:tracking-wide pb-10 uppercase'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    Your Success is Our Mission
                </motion.h1>
                <motion.h3 
                    className='lg:text-2xl text-xl grid grid-cols-1 lg:tracking-wide lg:leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    We believe in building trust through transparency.
                    Our team of researchers, data scientists, and developers
                    will work openly with you to understand your challenges,
                    navigate your data responsibly,
                    and deliver solutions that drive results.
                </motion.h3>
            </motion.section>
        </motion.div>
    )
}

export default MinorContent

{/* <svg width="16" height="120" viewBox="0 0 16 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 119.707C7.68342 120.098 8.31658 120.098 8.70711 119.707L15.0711 113.343C15.4616 112.953 15.4616 112.319 15.0711 111.929C14.6805 111.538 14.0474 111.538 13.6569 111.929L8 117.586L2.34315 111.929C1.95262 111.538 1.31946 111.538 0.928932 111.929C0.538408 112.319 0.538408 112.953 0.928932 113.343L7.29289 119.707ZM7 0L7 119H9L9 0L7 0Z" fill="#B8B8B8"/>
</svg> */}
