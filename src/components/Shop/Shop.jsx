import React, { useState } from 'react';
import classes from './Shop.module.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className={classes.shop_container}>
            <div className={classes.product_container}>
                    {
                    products.map(product => <Product
                        handleAddProduct={handleAddProduct}
                        product={product}
                    />)
                    }
            </div>
            <div className={classes.cart_container}>
                <Cart cart={ cart}/>
            </div>
        </div>
    )
}


export default Shop;