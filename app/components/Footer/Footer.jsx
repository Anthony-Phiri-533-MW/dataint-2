import React from 'react'
import { Divider } from './Divider';
import { SocialIcons } from './SocialIcons'; 
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <Divider />
            <div className='lg:flex lg:justify-between from-current'>
                <div>
                    <h1 className='font-bold text-3xl'>DataInt</h1>
                    <p>Data Intelligence</p>
                </div>

                <div className='lg:flex lg:space-x-4'>
                    <div>
                        <h1 className='font-bold text-xl'>Company</h1>
                        <ul>
                            <Link href='/aboutus'><li>About Us</li></Link>
                            <Link href='/ourwork'><li>Projects</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>Resources</h1>
                        <ul>
                            <Link href='/ourwork'><li>Models</li></Link>
                            <Link href='/ourwork'><li>Papers</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <SocialIcons />
        </footer>
    )
}

export default Footer
