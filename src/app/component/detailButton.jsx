"use client"
import React from "react";
import Link from "next/link";
import {useDetailStore} from "@/app/store.js";

const DetailButton = ({product}) => {
    const setSelectedProduct = useDetailStore((state) => state.setSelectedProduct);

    const handleDetailClick = () => {
        setSelectedProduct(product);
    };

    return (
        <Link product={product} href={`/product/${product.id}`}>
            <button onClick={handleDetailClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                İncele
            </button>
        </Link>
    );
}

export default DetailButton;
