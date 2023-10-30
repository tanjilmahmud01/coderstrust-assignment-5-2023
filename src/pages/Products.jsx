import React, { useEffect, useState } from 'react'
import Commerce from '@chec/commerce.js';
import commerce from '../lib/commerce.js';
import ProductCard from './ProductCard.jsx';

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        commerce.products.list().then((products) => {
            setProducts(products.data);
            // console.log(products.data)

        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <>
            <div className='flex items-center gap-3 mt-10'>
                {
                    products.map(product => <ProductCard
                        product={product}
                        key={product.id}
                    >

                    </ProductCard>)
                }
            </div>

        </>
    )
}

export default Products