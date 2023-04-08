import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import CardDetails from './CardDetails';
import {RemoveFromCart} from '../../utility/fakeDb';

const Cart = () => {
    const allData = useLoaderData();
    const [cart, setCart] = useState(allData);

    const handleRemoveCart = id => {
        const remaining = cart.filter(crt => crt.id != id);
        setCart(remaining);
        RemoveFromCart(id);
    }

    return (
        <div className='container mx-auto'>
            {
                cart.map(data => <CardDetails
                    key={data.id}
                    data={data}
                    handleRemoveCart={handleRemoveCart}
                ></CardDetails>)
            }
        </div>
    );
};

export default Cart;