'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MainCta } from '../Buttons/main/MainCta'
import Link from 'next/link';

const MinContent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className='lg:flex lg:justify-between pb-10' 
            data-testid="min-content"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div variants={itemVariants}>
                <motion.p 
                    className='lg:text-2xl text-lg pb-4'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    Let us turn your data into a powerful asset.
                    <span>Contact us today for a free consultation!</span>
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href='/contact'>
                    <MainCta text={"work with us"} className='pb-4'/>
                </Link>
                
            </motion.div>
        </motion.div>
    )
}

export default MinContent