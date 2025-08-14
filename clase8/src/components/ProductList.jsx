// src/components/ProductList.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice'; // Importa la acción que quieres usar

const ProductList = () => {
    const dispatch = useDispatch(); // Obtiene la función dispatch

    const plantsArray = [
        { name: "Helecho de Boston", cost: 20 },
        { name: "Helecho de DSFSDF", cost: 30 },
        { name: "Helecho de GDFBVC", cost: 23 },
        { name: "Helecho de Bfdgvfdn", cost: 76 },
        { name: "Helecho de EWRCDS", cost: 204 },
        { name: "Helecho de DSVFD", cost: 25 },
        { name: "Helecho de IDVNVJ", cost: 234 },

        // ... más plantas
    ];

    const handleAddToCart = (plant) => {
        // Despacha la acción 'addItem' con la planta como payload
        dispatch(addItem(plant));
        alert(`${plant.name} ha sido añadido al carrito!`);
    };

    return (
        <div className="product-grid">
            {plantsArray.map(plant => (
                <div className="product-card" key={plant.name}>
                    <h3>{plant.name}</h3>
                    <p>${plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>
                        Añadir al Carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;