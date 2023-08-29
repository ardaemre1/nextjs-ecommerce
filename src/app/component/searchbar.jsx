"use client"
import React, { useEffect } from 'react';
import { useBasketStore } from '@/app/store.js';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
    const searchValue = useBasketStore((state) => state.searchValue);
    const setSearchValue = useBasketStore((state) => state.setSearchValue);
    const setSearchResults = useBasketStore((state) => state.setSearchResults);

    const handleSearch = async (value) => {
        if (value.trim() !== '') {
            try {
                const response = await axios.get(`https://djangoappardaemrekarabacak.onrender.com/api/products/?format=json&search=${encodeURIComponent(value)}`);
                const filteredResults = response.data.filter(product => product.product_name.toLowerCase().includes(value.toLowerCase()));
                setSearchResults(filteredResults);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    };

    useEffect(() => {
        handleSearch(searchValue);
    }, [searchValue]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    handleSearch(e.target.value);
                }}
                value={searchValue}
                className='outline-none shadow-md p-1 placeholder-stone-950 rounded-md text-black border-2 h-10 bg-transparent pr-8 w-400'
                placeholder='Enter Your Product Name...'
            />
            <AiOutlineSearch onClick={() => handleSearch(searchValue)} className='h-4 w-4 absolute right-2 top-3 cursor-pointer' />
        </div>
    );
}

export default Searchbar;
