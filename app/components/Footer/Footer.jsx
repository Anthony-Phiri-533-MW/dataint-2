import React from 'react'
import { Divider } from './Divider';
import { SocialIcons } from './SocialIcons'; 

const Footer = () => {
    return (
        <footer >
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
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>About Us</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>Resources</h1>
                        <ul>
                            <li>Models</li>
                            <li>Papers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <SocialIcons />
        </footer>
    )
}

export default Footer
