'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { MainCta } from "../Buttons/main/MainCta";
import Image from 'next/image';
import heroImage from "../../../public/bgremoved1 1.png";
import Link from 'next/link';

const TypingText = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.substring(0, index + 1));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { x: 100, opacity: 0, scale: 0.8 },
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
            className='lg:flex lg:justify-between lg:space-x-12 md:space-x-8 md:flex justify-center pb-12' 
            data-testid="hero"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.section className='space-y-12' variants={itemVariants}>
                <motion.h1 
                    className='lg:text-5xl text-4xl grid grid-cols-1 font-bold lg:tracking-wide'
                    variants={itemVariants}
                >
                    <TypingText text="Transforming Data into Strategic Advantage" speed={50} />
                </motion.h1>
                <motion.h3 
                    className='lg:text-2xl text-xl grid grid-cols-1 leading-relaxed'
                    variants={itemVariants}
                >
                    <span>Experience Data-Driven Excellence with Cutting-Edge AI Solutions</span>
                    <span className='text-lg mt-4 text-gray-600'>Empower your organization with predictive analytics, intelligent automation, and data-driven insights that drive measurable business results and competitive advantage</span>
                </motion.h3>

                <motion.div 
                    className=''
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href='/contact'>
                        <MainCta text={"work with us"} />
                    </Link>
                </motion.div>
            </motion.section>

            <motion.section variants={imageVariants}>
                <motion.div
                    whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Image src={heroImage} alt='hero image' width={400} height={300} />
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default Hero