import React from 'react';
import { FaFacebook, FaSnapchat, FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
     <div className='bg-black'>
         <div className='bg-black text-white leading-7 py-10'>
 <div className='grid grid-cols-1 md:grid-cols-12  w-11/12 mx-auto  gap-4'>
            <div className='col-span-3'>
            <h2 className='font-bold text-4xl pb-6'>DigiTools</h2>
            <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div className='col-span-6'>
<div className='grid grid-cols-3'>
    <div>
                    <h2 className='font-bold'>Product</h2>
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Template</a></li>
                        <li><a href="">Integration</a></li>
                    </ul>
                </div>
    <div>
                    <h2 className='font-bold'>Company</h2>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
    <div>
                    <h2 className='font-bold'>Resources</h2>
                    <ul>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
             
</div>
               
            </div>
            <div className='col-span-3'>
                <h2>Social Links</h2>
                <div className='flex gap-2'>
                    <FaFacebook/>
                    <FaSnapchat/>
                    <FaX/>
                </div>
            </div>
        </div>
        </div>

        <div className="divider w-11/12 mx-auto divider-info "></div>


    <div className='bg-black py-10'>

           <div className='flex justify-between gap-2 bg-black w-11/12 mx-auto text-white'>
            <div>
                <p>© 2026 Digitools. All rights reserved.</p>
            </div>
            <div>
                <ul className='flex gap-2 flex-col md:flex-row'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </div>
        </div> 
        </div> 
                </>
 
       
    );
};

export default Footer;