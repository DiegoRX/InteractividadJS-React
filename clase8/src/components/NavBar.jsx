// src/components/Navbar.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // useSelector recibe una función que selecciona una parte del estado global.
    // 'state.cart.items' corresponde a la estructura que definimos en el store.
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    console.log(cartItems)
    return (
        <nav>
            <h1>Tienda de Plantas</h1>
            <div>
                <span>Carrito: {totalItems}</span>
            </div>
        </nav>
    );
};

export default Navbar;