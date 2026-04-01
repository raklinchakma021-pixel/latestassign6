import React from 'react';
import PricingData from '../data/pricing.json';

const Pricing = () => {
  return (
    <div className='pb-10'>
      <div className='text-center pt-18'>
        <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10 w-11/12 mx-auto leading-7">
        {PricingData.map(product => (
          <div key={product.id} className="card p-6 shadow ">
            <h2 className="text-xl font-bold">{product.tag}</h2>
            <p>{product.description}</p>
            <span><strong className='text-2xl'>${product.price}</strong>/Month</span>
             <ul>
  {product.features.map(f => <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    {f}</li>)}
</ul>
<button className='btn text-white rounded-full mt-10 bg-linear-to-r from-blue-600  to-purple-400'>{product.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;