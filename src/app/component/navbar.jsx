import { AiOutlineHome,AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai'
import { BsBasket } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Link from "next/link.js";
import MobileMenu from '@/app/mobileMenu/page.jsx'
import Searchbar from "@/app/component/searchbar.jsx";
import React from "react";
import {ToastContainer} from "react-toastify";

const navbar = () => {
    return(
        <header className='flex w-100 h-100 border-b-2 border-black'>
            <div className='hidden sm:flex justify-around items-center w-screen m-1.5 rounded-xl'>
                <div>
                    <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OCpRZInxzOwXs1M3EMoAJtlikvh...ps8v44 " className="max-width-100" width="120px" height="100px"/>
                </div>
                <div className='flex justify-center items-center relative'>
                    <Searchbar/>
                </div>
                <div className='flex justify-end items-center w-1/5 gap-8'>
                    <Link href='/'>
                        <AiOutlineHome className='w-8 h-8 cursor-pointer '/>
                    </Link>
                    <Link href='/basket'>
                        <BsBasket className='w-8 h-8 cursor-pointer'/>
                    </Link>
                    <Link href='/profile'>
                        <CgProfile className='w-8 h-8 cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <div className='grid sm:hidden w-full h-100 grid-cols-2 place-items-center bg-white pb-0.5'>
                <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OCpRZInxzOwXs1M3EMoAJtlikvh...ps8v44 " className="max-width-100" width="100px" height="100px"/>
                <MobileMenu/>
            </div>
        </header>
    )
}
export default navbar