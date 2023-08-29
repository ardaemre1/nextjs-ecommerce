import React, { useState } from "react";
import { useBasketStore } from "@/app/store.js";
import Basket from '../basket/page.jsx'

const Counter = ({ item }) => {
    const sepetStore = useBasketStore();
    const [counter, setCounter] = useState(1);
    const [totalPriceS, setTotalPrice] = useState(parseInt(item.price)); // Toplam fiyatı tutmak için state ekledik

    const increaseQuantity = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
        sepetStore.updateCounter(item.id, newCounter);

        setTotalPrice((prevTotal) => prevTotal + parseFloat(item.price));
    };

    const decreaseQuantity = () => {
        if (counter > 1) {
            const newCounter = counter - 1;
            setCounter(newCounter);
            sepetStore.updateCounter(item.id, newCounter);

            setTotalPrice((prevTotal) => prevTotal - parseFloat(item.price));
        } else {
            console.log("Çıkarma Olamaz");
        }
    };

    return (
        <div className="flex items-center space-x-3">
            <button
                onClick={decreaseQuantity}
                className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
            >
                <span className="sr-only">Azalt</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9h16"/>
                </svg>
            </button>
            <div>{counter}</div>
            <button
                onClick={increaseQuantity}
                className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
            >
                <span className="sr-only">Artır</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16"/>
                </svg>
            </button>
        </div>
    );
};

export default Counter;
