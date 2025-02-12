import React, { useEffect, useState } from 'react';

export default function ProductData() {
    const [product, setProduct] = useState([]);
    const [originalProduct, setOriginalProduct] = useState([]);
    const [inputvalue, setInputvalue] = useState("");
    

    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data);
            setOriginalProduct(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = () => {
        if (inputvalue.trim() === "") {
            setProduct(originalProduct);
        } else {
            const filteredData = originalProduct.filter((data) =>
                data.title.toLowerCase().includes(inputvalue.toLowerCase())
            );
            setProduct(filteredData);
        }
    };

    return (
        <div>
            <input
                className="text-black border-2"
                type="text"
                placeholder="Search your results"
                value={inputvalue}
                onChange={(e) => setInputvalue(e.target.value)}
            />

            <button className="border-2 ml-4 cursor-pointer"
                onClick={() => {
                    handleSearch();
                    setInputvalue("");
                }}
            >
                Search
            </button>

            {product.length > 0 ? (
                product.map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
