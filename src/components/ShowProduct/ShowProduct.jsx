import React from 'react';
import {Link} from 'react-router-dom';
import {addToLocalStorage} from '../../utility/fakeDb';

const ShowProduct = ({product}) => {
    const {image, category, price, rating, id} = product;

    const handleAddToCart = (product) => {
        addToLocalStorage(product.id)
    }

    return (
        <div className='border border-solid border-primary rounded-md p-4'>
            <img className='h-[250px] mx-auto' src={image} alt="" />
            <div className='py-5'>
                <h5 className='text-3xl'>{category}</h5>
                <p className='text-xl'>Price: ${price}</p>
                <p className='text-xl'>Ratings: {rating.rate}</p>
            </div>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex justify-center">
                <button onClick={() => handleAddToCart(product)} className="btn btn-active">Add to cart</button>
                <Link className="btn text-secondary" to={`/product/${id}`}><button>View details</button></Link>
            </div>
        </div>
    );
};

export default ShowProduct;