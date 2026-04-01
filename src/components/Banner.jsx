import React from 'react';
import { GoDotFill } from 'react-icons/go';
import BannerImage from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (

<div className=" ">
  <div className="mt-10 mb-20 flex justify-between items-center flex-col-reverse md:flex-row">
   
    <div className=''>
        <button className='btn gap-2 bg-purple-200 text-purple-600 rounded-full ' >
            <GoDotFill/>
        <span className=''>New: AI-Powered Tools Available</span>

        </button>
      <h1 className="text-4xl md:text-7xl text-center md:text-left font-bold  leading-10 md:leading-18">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6 text-xl text-center">
    Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products


      </p>


<div className=' flex gap-2 justify-center'>
      <button className="btn btn-primary rounded-full font-bold">Explore Products</button>
      <button className="btn btn-outline rounded-full font-bold text-blue-500 outline-blue-500 "><CiPlay1/>Watch Demo</button>

</div>
    </div>

     <img
      src={BannerImage}
      className="  max-w-sm md:max-w-md rounded-lg shadow-2xl mb-10"
    />
  </div>
</div>

            
      
    );
};

export default Banner;