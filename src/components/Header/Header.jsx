import React from 'react';
import './Header.css'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/shop.json";
import {Link, useLoaderData} from 'react-router-dom';
import ShowProduct from '../ShowProduct/ShowProduct';

const Header = () => {
    const products = useLoaderData();
    return (
        <main>
            <section className='w-full md:flex'>
                <div className='left-div md:w-1/2'>
                    <h1 className='des-1 text-center mt-16 font-extrabold'>Welcome to</h1>
                    <h2 className='des-2 text-center font-bold text-orange-600'>My shopping cart</h2>
                    <div className='w-1/2 mx-auto flex justify-evenly mt-8'>
                        <Link to='/cart'><button className="btn btn-primary">View Cart</button></Link>
                        <Link to='/more'><button className="btn btn-outline btn-secondary">Learn More</button></Link>
                    </div>
                </div>
                <div className='right-div md:w-1/2'>
                    <Lottie className='md:w-full' animationData={groovyWalkAnimation} loop={true} />
                </div>
            </section>
            <section>
                <h1 className='text-6xl text-center font-extrabold my-24 underline decoration-wavy'>Product section</h1>
            </section>
            <section className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3 container mx-auto'>
                {
                    products.map(product => <ShowProduct
                        key={product.id}
                        product={product}
                    ></ShowProduct>)
                }
            </section>
        </main>
    );
};

export default Header;