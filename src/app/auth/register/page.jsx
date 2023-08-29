import react from 'react'
import React from "react";
import Image from 'next/image'
import Link from "next/link.js";
import RegisterForm from "@/app/component/registerForm.jsx";

const register = () => {
    return(
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            {/* login container */}
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                {/* form */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                    <RegisterForm/>

                    <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>Do you have an account?</p>
                        <Link href="/auth/login">
                            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
                        </Link>
                    </div>
                </div>

                {/* image */}
                <div className="md:block hidden w-1/2">
                    <Image className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="Login" />
                </div>
            </div>
        </section>
    )
}
export default register
