'use client'
import React from 'react'
import { motion } from 'framer-motion';

export const FeaturedContent = ({ title, content }) => {
  return (
    <motion.div
      className='w-full p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg h-full'
      data-testid="featured-content"
      whileHover={{
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className='font-bold text-2xl pb-3'
        whileHover={{ color: "#3B82F6" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className='text-base leading-relaxed tracking-wide text-gray-800'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};
