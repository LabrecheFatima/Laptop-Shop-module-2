import { createContext, useContext, useState } from "react";


const CartContext= createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    // arrow function [{hp, quantity: 3, price: 150$}, {macbook air 15, quantity: 1}, {macbook air 16,quantity: 1}]
    const addCart = (product) => {
        setCartItems(prevItems => {
            const existingItem= prevItems.find(item => item.name == product.name);

            if (existingItem) {
                return prevItems.map(
                    item=> item.name == product.name 
                    ? {...item, quantity: item.quantity+ 1} : item
                )
            }
            else {
                return ([...prevItems, {...product, quantity : 1}]);
            }
        })
    };

    const getCartItemsCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const value= {
        cartItems,
        addCart, 
        getCartItemsCount,
        getCartTotal, 
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}