import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Commerce from '@chec/commerce.js';
import commerce from '../lib/commerce.js';

const ProductDetails = () => {
    let { id } = useParams();

    console.log(id);

    const [product, setProduct] = useState({});

    const fetchProducts = () => {
        commerce.products.retrieve(id).then((product) => setProduct(product));
        // commerce.products.list().then((products) => {
        //   setProducts(products.data);
        //   // console.log(products.data)

        // }).catch((error) => {
        //   console.log('There was an error fetching the products', error)
        // });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // console.log(product);

    const { name, image, price, description } = product;
    // let sliced = description.slice(1,-1);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image?.url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                {/* description problem: data comes as html p tag */}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className="card-actions">
                    {price?.raw}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails