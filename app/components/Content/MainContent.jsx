'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeaturedContent } from "./FeaturedContent"; 

const MainContent = () => {
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

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className='text-center' 
            data-testid="main-content"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className='pb-16' variants={itemVariants}>
                <motion.section
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className='text-3xl font-bold'>Unlock the Power of Data-Driven Innovation </h2>
                </motion.section>

                <motion.section variants={itemVariants}>
                    <p className='text-lg'>These are the services we offer</p>
                </motion.section>
            </motion.div>

            <motion.div 
                className='lg:flex space-x-4 md:grid md:grid-cols-2'
                variants={containerVariants}
            >
                <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
                    <FeaturedContent title={"Predictive Modeling & Machine Learning"} content={"We develop and deploy custom machine learning models for tasks like forecasting, optimization, and recommendation and Integrate these models into software applications "}/>
                </motion.div>
                <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
                    <FeaturedContent title={"Data Acquisition & Processing"} content={"We assist in collecting data from various sources (internal databases, web scraping, sensors) and also in cleaning, transforming, and preparing data for analysis  "}/>
                </motion.div>
                <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
                    <FeaturedContent title={"Data-Driven software Development"} content={"We build custom web and mobile applications that leverage data analysis and visualization to provide users with valuable insights and seamless integration with data storage solutions   "}/>
                </motion.div>
                <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
                    <FeaturedContent title={"Big Data Engineering & Infrastructure"} content={"Our team designs and implements scalable data pipelines to handle large and complex datasets efficiently,building and managing big data infrastructure for distributed dataprocessing  "}/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default MainContent