import React from 'react';
import UserImg from '../assets/user.png'
import PackageImg from '../assets/package.png'
import RocketImg from '../assets/rocket.png'
const GetStarte = () => {
    return (
        <>
        <div className='bg-gray-100 mt-10 pb-10'>
                     <div className='text-center pt-18 ' >
            <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3  w-11/12 mx-auto gap-6 my-10'>
           <div className="card bg-base-100 w-100 min-h-80 shadow-sm">
            <div className='flex justify-between my-2 mx-4'>
        <span></span>
        <span className='bg-linear-to-r from-blue-600  to-purple-400 text-white rounded-full px-2 py-1 '>01</span>
    </div>
      
  <div className="card-body text-center ">
    < img className='w-16 mx-auto  bg-purple-200 rounded-full p-2' src={UserImg} alt="" />
    <h2 className='font-bold text-xl'>Create Account</h2>
    <p>Sign up for free in seconds. No credit card required to get started.</p>
  </div>
</div>
           <div className="card bg-base-100 w-100 min-h-80 shadow-sm">
            <div className='flex justify-between my-2 mx-4'>
        <span></span>
        <span className='bg-linear-to-r from-blue-600  to-purple-400 text-white rounded-full px-2 py-1 '>02</span>
    </div>
      
  <div className="card-body text-center ">
    < img className='w-16 mx-auto  bg-purple-200 rounded-full p-2' src={PackageImg} alt="" />
    <h2 className='font-bold text-xl'>Choose Products</h2>
    <p>Browse our catalog and select the tools that fit your needs.</p>
  </div>
</div>
           <div className="card bg-base-100 w-100 min-h-80 shadow-sm">
            <div className='flex justify-between my-2 mx-4'>
        <span></span>
        <span className='bg-linear-to-r from-blue-600  to-purple-400 text-white rounded-full px-2 py-1 '>03</span>
    </div>
      
  <div className="card-body text-center ">
    < img className='w-16 mx-auto  bg-purple-200 rounded-full p-2' src={RocketImg} alt="" />
    <h2 className='font-bold text-xl'>Start Creating</h2>
    <p>Download and start using your premium tools immediately.</p>
  </div>
</div>
        </div>

        </div>
        </>
    );
};

export default GetStarte;