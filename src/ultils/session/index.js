const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
export const addCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        };
        const updatedCartItems = cartItems.map((item) => (item === existingItem ? updatedItem : item));
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
        const newItem = {
            product: product,
            quantity: 1,
        };
        const updatedCartItems = [...cartItems, newItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
};

export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export const checkout = () => {
    localStorage.removeItem('cartItems');
    sessionStorage.removeItem('cartItems');
};
