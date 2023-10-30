import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, image, price, id } = product;
    // console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image?.url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price?.raw}</p>
                <div className="card-actions justify-end">
                    <Link to={`/productDetails/${id}`}> <button className="btn btn-primary">Buy Now</button></Link>

                </div>
            </div>
        </div>
    )
}

export default ProductCard