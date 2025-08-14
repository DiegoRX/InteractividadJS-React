// src/store/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    // 1. NOMBRE DEL SLICE
    name: 'cart',

    // 2. ESTADO INICIAL
    initialState: {
        items: [], // Un array para guardar los productos del carrito
    },

    // 3. REDUCERS: Funciones que dictan cómo cambia el estado.
    // RTK usa una librería llamada Immer por debajo, que te permite escribir código
    // que "parece" que muta el estado, pero en realidad lo hace de forma inmutable y segura.
    reducers: {
        /**
         * Acción para añadir un item al carrito.
         * El item que se añade viene en `action.payload`.
         */
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);

            if (existingItem) {
                // Si el item ya existe, incrementa su cantidad
                existingItem.quantity += 1;
            } else {
                // Si es un item nuevo, lo añade al array con cantidad 1
                state.items.push({ ...newItem, quantity: 1 });
            }
        },

        /**
         * Acción para eliminar un item del carrito.
         * El nombre del item a eliminar viene en `action.payload`.
         */
        removeItem: (state, action) => {
            const itemName = action.payload;
            state.items = state.items.filter(item => item.name !== itemName);
        },

        // Aquí podrías añadir más acciones como 'incrementQuantity', 'decrementQuantity', etc.
    },
});

// Exportamos las acciones para poder usarlas en nuestros componentes
export const { addItem, removeItem } = cartSlice.actions;

// Exportamos el reducer para añadirlo a nuestro store
export default cartSlice.reducer;