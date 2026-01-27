'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /* ---------- Variants ---------- */
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open:   { opacity: 1, height: 'auto' }
  };
  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open:   { x:   0, opacity: 1 }
  };

  return (
    <motion.header
      role="banner"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-3"
    >
      {/* ---------- Brand ---------- */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.h1
            className="text-3xl font-bold"
            whileHover={{ color: '#3B82F6' }}
          >
            DataInt
          </motion.h1>
          <span className="text-black">|</span>
          <Link href="/">
            <motion.h2
              whileHover={{ color: '#3B82F6' }}
              className="font-medium"
            >
              Home
            </motion.h2>
          </Link>
        </div>

        {/* ---------- Desktop nav ---------- */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Our work', 'About us', 'Contact'].map(label => (
            <Link key={label} href={`/${label.toLowerCase().replace(' ', '')}`}>
              <motion.span
                className="font-bold cursor-pointer text-xl"
                whileHover={{ color: '#3B82F6', y: -2 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* ---------- Mobile toggle ---------- */}
        <motion.button
          className="md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.svg
                key="close"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,  opacity: 1 }}
                exit={{ rotate: 90,  opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* ✖ icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                initial={{ rotate: 90,  opacity: 0 }}
                animate={{ rotate: 0,  opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="md:hidden flex flex-col items-center space-y-4 pt-4"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {['Our work', 'About us', 'Contact'].map(label => (
              <motion.li key={label} variants={itemVariants}>
                <Link href={`/${label.toLowerCase().replace(' ', '')}`}>
                  <span className="font-bold" onClick={toggleMenu}>
                    {label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;