import {getLocalData} from "../utility/fakeDb";

const loadAllData = async () => {
    const storedData = await fetch('https://fakestoreapi.com/products')
    const products = await storedData.json()

    const storedCart = getLocalData();
    const savedCart = []
    for (const id in storedCart) {
        const addedProducts = products.find(pd => pd.id == id);
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
}

export default loadAllData;