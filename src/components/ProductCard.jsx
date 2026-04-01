import React from 'react';

const ProductCard = ({product, add,cart}) => {
    return (
        <div className='flex mx-auto'>
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-between '>
    <span className="badge badge-md outline-gray-100 rounded-full p-4">{product.icon}</span>
    <span   className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
    product.tag.toLowerCase() === "best seller"
      ? "bg-yellow-100 text-gray-800"
      : product.tag.toLowerCase() === "new"
      ? "bg-green-100 text-gray-800"
      : product.tag.toLowerCase() === "popular"
      ? "bg-purple-100 text-gray-800"
      : "bg-base-200"
  }`}>{product.tag}</span>
    </div>
    <div className="">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <span><strong className='text-4xl'>${product.price}</strong>/Mo</span>

    </div>
   <ul>
  {product.features.map(f => <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    {f}</li>)}
</ul>
   
    <div className="mt-6">
      <button   onClick={() => add(product)}
  className={`btn btn-block ${
    cart.some(item => item.id === product.id)
      ? "btn-outline"
      : "btn-primary"
  }`}>
         {cart.some(item => item.id === product.id)
    ? "Added to Cart"
    : "Buy Now"}
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;