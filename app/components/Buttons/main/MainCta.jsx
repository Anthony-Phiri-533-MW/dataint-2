'use client'
import React from 'react'
import { motion } from 'framer-motion';

export const MainCta = ({text, className = ''}) => {
  return (
    <motion.button 
      className={`max-h-14 font-bold bg-[#001538] text-[#FFFFFF] rounded-full p-2 uppercase tracking-tight hover:tracking-wide ${className}`}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#1e40af",
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.button>
  )
}

