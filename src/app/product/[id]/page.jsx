"use client"
import React from 'react';
import {useDetailStore} from "@/app/store.js";
import BasketButtonAdd from "@/app/component/BasketButtonAdd.jsx";

const DetailProduct = () => {
    const selectedProduct = useDetailStore((state) => state.selectedProduct);

    return (
        <div>
            {selectedProduct && (
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={selectedProduct.images}/>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{selectedProduct.product_name}</h1>
                                    <p className="leading-relaxed">{selectedProduct.description}</p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='text-red-600 font-bold text-2xl'>Price: {parseFloat(selectedProduct.price).toFixed(2).replace(/\.?0+$/, "")} ₺</p>
                                        <BasketButtonAdd product={selectedProduct}/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default DetailProduct;
