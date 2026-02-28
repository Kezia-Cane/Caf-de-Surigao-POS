import { createContext, useContext, useState } from 'react';
import { mockProducts } from './data';

const POSContext = createContext();

export const usePOS = () => useContext(POSContext);

export const POSProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, delta) => {
        setCart((prevCart) => {
            return prevCart.map(item => {
                if (item.id === productId) {
                    const newQ = item.quantity + delta;
                    return newQ > 0 ? { ...item, quantity: newQ } : item;
                }
                return item;
            });
        });
    };

    const clearCart = () => setCart([]);

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    return (
        <POSContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            subtotal,
            tax,
            total
        }}>
            {children}
        </POSContext.Provider>
    );
};
