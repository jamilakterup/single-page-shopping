// get from local storage
const getLocalData = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}


// set to local storage
const addToLocalStorage = id => {
    const shoppingCart = getLocalData()

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const RemoveFromCart = id => {
    const shoppingCart = getLocalData();
    if (id in shoppingCart) {
        delete shoppingCart[id];
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


export {
    getLocalData,
    addToLocalStorage,
    RemoveFromCart
}