"use client"
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { BsBasket } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link.js';
import Searchbar from "@/app/component/searchbar.jsx";

const MobileMenu = () => {
    const [click, setClick] = useState(false);

    const toggleMenu = () => {
        setClick(!click);
    };

    return (
        <>
            {click ? (
                <AiOutlineClose onClick={toggleMenu} className="w-8 h-8 cursor-pointer" />
            ) : (
                <AiOutlineMenu
                    onClick={toggleMenu}
                    className="w-8 h-8 cursor-pointer transition-all"
                />
            )}
            {click ? (
                <div className="flex w-full h-full justify-end items-center ">
                    <ul>
                        <li className="gap-5 mt-3 flex justify-around items-center">
                            <Link href="/">
                                <AiOutlineHome className="w-8 h-8 cursor-pointer" />
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link href="/basket">
                                <BsBasket className="w-8 h-8 cursor-pointer" />
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link href="/profile">
                                <CgProfile className="w-8 h-8 cursor-pointer" />
                            </Link>
                        </li>

                    </ul>
                </div>
            ) : null}
        </>
    );
};

export default MobileMenu;
