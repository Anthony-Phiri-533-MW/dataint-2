'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        <h1 className="text-xl font-bold">DataInt</h1>
        {/* <div class="h-[25px] min-h-[1em] w-px self-stretch dark:via-neutral-400"></div> */}
        <p className="px-2 h-[150px] black">|</p>
        <h2>Home</h2>
      </div>
      <div>
        <button className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <ul className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} md:flex md:flex-row`}>
          <li className="px-4 font-bold">Our work</li>
          <li className="px-4 font-bold">About us</li>
          <li className="px-4 font-bold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;





// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex justify-between'>
//         <div className='flex'>
//             <h1 className='text-xl font-bold'>DataInt</h1>
//             {/* <div class="h-[25px] min-h-[1em] w-px self-stretch dark:via-neutral-400"></div> */}
//             <p className='px-2 h-[150px] black'>|</p>
//             <h2>Home</h2>

//         </div>
//         <div>
//             <ul className='flex'>
//                 <li className='px-4 font-bold'>Our work</li>
//                 <li className='px-4 font-bold'>About us</li>
//                 <li className='px-4 font-bold'>Contact</li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar