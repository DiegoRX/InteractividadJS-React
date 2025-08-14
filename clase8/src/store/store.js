// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Importamos el reducer del slice del carrito

export const store = configureStore({
    reducer: {
        // Aquí registramos nuestros slices.
        // La clave 'cart' es como llamaremos a este estado en el store global.
        cart: cartReducer,
        // podrías añadir más reducers aquí:
        // user: userReducer, 
    },
});