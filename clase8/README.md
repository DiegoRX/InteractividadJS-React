Guía Moderna para Integrar Redux en React con Redux Toolkit (RTK)
¿Qué es Redux y por qué usarlo?
Imagina que el "estado" (la información como los items en un carrito, si un usuario inició sesión, etc.) de tu aplicación está disperso en muchos componentes. Cuando la app crece, manejar ese estado se vuelve un caos.

Redux centraliza todo el estado de tu aplicación en un único lugar llamado "store" (almacén). Esto hace que tu aplicación sea más predecible, fácil de depurar y escalar. Redux es como un "cerebro" central para los datos de tu app.

Redux Toolkit (RTK) es el paquete oficial que simplifica la configuración de Redux, eliminando mucho del código repetitivo y previniendo errores comunes.

Paso 1: Instalación
Primero, necesitas instalar las dos bibliotecas clave: @reduxjs/toolkit (el núcleo de RTK) y react-redux (para conectar Redux con React).

Abre tu terminal en la carpeta de tu proyecto y ejecuta:

Bash

npm install @reduxjs/toolkit react-redux
Paso 2: Crear un "Slice" del Estado
Un "slice" (rebanada) es una porción del estado global de Redux que se encarga de una funcionalidad específica. Por ejemplo, tendremos un slice para el carrito de compras.

Crea una nueva carpeta src/store (o src/redux) para organizar tu código de Redux.

Dentro de src/store, crea un archivo llamado cartSlice.js.

Este archivo definirá:

El estado inicial del carrito.

Las "acciones" que pueden modificarlo (como addItem).

Los "reducers" que son las funciones que ejecutan esa modificación.

JavaScript

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
Paso 3: Configurar el "Store" de Redux
El "store" es el objeto que contiene todo el estado de tu aplicación. Solo hay un store en una aplicación Redux.

En tu carpeta src/store, crea un archivo llamado store.js.

JavaScript

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
configureStore de RTK automáticamente configura la tienda con buenas prácticas y habilita las Redux DevTools.

Paso 4: Proveer el Store a tu Aplicación React
Ahora, necesitamos que nuestra aplicación de React "sepa" que este store existe. Para ello, usamos el componente <Provider> de react-redux.

Ve a tu archivo de entrada, usualmente src/index.js o src/main.jsx.

Envuelve tu componente <App /> con el <Provider>.

JavaScript

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store'; // Importa el store que creamos
import { Provider } from 'react-redux'; // Importa el Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolvemos la App con el Provider y le pasamos nuestro store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
¡Listo! Tu aplicación ya está conectada a Redux. Ahora veamos cómo usarlo en los componentes.

Paso 5: Usar el Estado y Despachar Acciones en Componentes
Hay dos "hooks" principales que usarás:

useSelector: Para leer datos del store.

useDispatch: Para despachar (enviar) acciones para modificar el estado.

Ejemplo 1: Leer datos del store (en un Navbar.jsx)
Imagina que quieres mostrar el número de items en el carrito en tu barra de navegación.

JavaScript

// src/components/Navbar.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // useSelector recibe una función que selecciona una parte del estado global.
  // 'state.cart.items' corresponde a la estructura que definimos en el store.
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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
Ejemplo 2: Despachar una acción (en tu ProductList.jsx)
Así es como conectarías el botón "Añadir al Carrito" de tu ProductList.

JavaScript

// src/components/ProductList.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice'; // Importa la acción que quieres usar

const ProductList = () => {
  const dispatch = useDispatch(); // Obtiene la función dispatch

  const plantsArray = [
    { name: "Helecho de Boston", cost: 20 },
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
¡Herramienta Esencial: Redux DevTools!
Para depurar y visualizar tu estado de Redux, es IMPRESCINDIBLE que instales la extensión de navegador Redux DevTools. Te permitirá ver cada acción que se despacha, cómo cambia el estado y hasta "viajar en el tiempo" para depurar. Búscala en la tienda de extensiones de Chrome o Firefox.

¡Y eso es todo! Has integrado Redux de manera moderna en tu aplicación.