"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import BasketButtonAdd from "@/app/component/BasketButtonAdd.jsx";
import { useBasketStore } from "@/app/store.js";
import DetailButton from "@/app/component/detailButton.jsx";


const HomePage = () => {
    const [repo, setRepo] = useState([]);
    const checkSearch = useBasketStore((state) => state.searchResults);
    const checkValue = useBasketStore((state) => state.searchValue);

    useEffect(() => {
        axios.get('https://djangoappardaemrekarabacak.onrender.com/api/products/?format=j   son')
            .then((response) => {
                setRepo(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    const productsToDisplay = checkValue && checkValue.trim() !== '' ? checkSearch : repo;

    return (
        <div className='flex flex-wrap justify-center items-center w-full h-full'>
            {productsToDisplay.map((product) => (
                <div key={product.id} className='flex flex-col justify-center items-center shadow-md shadow-black border-black rounded-md p-3' style={{ margin: '20px', width: '16rem', height: '24rem' }}>
                    <div style={{ height: '67%', width: '100%' }} className='w-full flex justify-center items-start rounded-2xl'>
                        <img
                            className='w-fit h-48 bg-transparent transform hover:scale-110 transition-transform duration-300'
                            style={{ height: '180px', width: '160px' }}
                            src={product.images}
                            alt={product.product_name}
                        />
                    </div>
                    <div style={{ height: '33%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='w-100 flex flex-col justify-center items-center gap-2'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>{product.product_name}</h3>
                            <p className='text-red-600'>Price: {parseFloat(product.price).toFixed(2).replace(/\.?0+$/, "")} ₺</p>
                        </div>
                        <div className='flex flex-row items-center justify-evenly w-full'>
                            <BasketButtonAdd product={product} />
                            <DetailButton product={product}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
