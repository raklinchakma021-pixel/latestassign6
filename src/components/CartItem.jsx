import React from 'react';

const CartItem = ({item, remove}) => {
    return (
        <div>
            <div className='p-7 bg-gray-100 mx-6 my-4'>
                <div className='flex justify-between '>
                 
      <div>
           <div className='flex gap-4 items-center'>
                        <span className='text-2xl bg-white rounded-full p-4'>{item.icon}</span>
<div className='text-left'>
          <h3 className='font-bold text-lg'>{item.name}</h3>
                <p>${item.price}</p>

</div>
                    </div>
      </div>
                <button className='text-red-400 font-bold' onClick={() => remove(item.id)}>Remove</button>
                </div>
         
            </div>
        </div>
    );
};

export default CartItem;