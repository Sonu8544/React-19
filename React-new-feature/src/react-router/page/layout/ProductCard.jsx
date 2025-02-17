import React from 'react';
import { useLoaderData, useParams, NavLink } from 'react-router-dom';

const ProductCard = () => {
    const data = useLoaderData();
    let { productId } = useParams();

    console.log("Product ID from URL:", productId);
    console.log("Product Data:", data);

    // Convert productId to a number since _id in API is a number
    const product = data.find((item) => item._id === Number(productId));

    return (
        <>
            <div>ProductCard {productId}</div>
            {product ? (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={product.image} alt={product.title} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </>
    );
};

export default ProductCard;
