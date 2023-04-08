import React from 'react';

const CardDetails = ({data, handleRemoveCart}) => {
    const {image, category, price, quantity, id} = data;
    // const handleRemoveCart = id => {
    //     RemoveFromCart(id)
    // }
    return (
        <div className='flex items-center gap-4 border-2 lg:w-1/2 mx-auto my-3 p-4 rounded-md'>
            <img className='h-[100px] w-[100px]' src={image} alt="" />
            <div className='flex-1'>
                <p>{category}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
            </div>
            <div >
                <button onClick={() => handleRemoveCart(id)}>X</button>
            </div>
        </div>
    );
};

export default CardDetails;