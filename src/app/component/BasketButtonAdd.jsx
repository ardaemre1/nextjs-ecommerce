"use client"
import react, {useState} from 'react'
import {useBasketStore} from '../store.js'
import {toast} from "react-toastify";


const BasketButtonAdd = ( { product } ) => {
    const addToBasket = useBasketStore((state) => state.addToBasket)
    const checkToBasket = useBasketStore((state) => state.basket)
    const isAlreadyInBasket = checkToBasket.some((item) => item.id === product.id);
    const handleClick = () => {
        if (!isAlreadyInBasket){
            addToBasket(product)
            toast.success('🦄 Ürün Başarılı Bir Şekilde Sepetinize Eklendi...', {
                position: "top-right",
                autoClose: 750,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            console.log("Bu Ürün Zaten Sepetinizde Bulunuyor...")
        }
    }
    return(
        <button disabled={isAlreadyInBasket} onClick={handleClick}  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sepete Ekle
        </button>
    )
}
export default BasketButtonAdd