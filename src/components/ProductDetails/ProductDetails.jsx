import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import './ProductDetails.css'
import {addToLocalStorage} from '../../utility/fakeDb';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);
    const {image, category, description, price, id} = productDetails;

    const handleAddToCart = (id) => {
        addToLocalStorage(id)
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl container mx-auto my-12">
            <figure className='p-5'><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-primary">{category}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to='/'> <button className="btn btn-outline btn-primary">back to shop</button></Link>
                    <button onClick={() => handleAddToCart(id)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;