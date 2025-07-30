// app/context/CartContext.js
'use client';
import { createContext, useContext, useState } from 'react';

export const CartContext = createContext(); // ✅ Exported here

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    const removeFromCart = (product) => {
        setCartItems(prev => prev.filter(item => item.id !== product.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Optional helper hook
export const useCart = () => useContext(CartContext);
