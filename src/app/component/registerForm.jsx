"use client"
import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../firebaseConfig.js";
import {toast} from "react-toastify"; // Firebase yapılandırma dosyanızın yolunu doğru belirttiğinizden emin olun
const auth = getAuth(app);

const registerForm = () => {
    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')

    const [pwType, setPwType] = useState('password')

    const togglePasswordVisibility = () => {
        setPwType(pwType === 'password' ? 'text' : 'password'); // Şifre tipini güncelle
    };

    const registerButton = () => {
        createUserWithEmailAndPassword(auth,email,pw).then((userCredential) => {
            const user = userCredential.user
            //console.log("kayıt başarılı" + user.email)

            toast.success('🦄 Kayıt Başarılı, Giriş Yapabilirsiniz...', {
                position: "top-right",
                autoClose: 750,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 750,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }

    return(
        <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
            <div className="relative">
                <div className='flex justify-center items-center gap-3 flex-col'>
                    <input className="p-2 rounded-xl border w-full" type={pwType}
                           name="password" placeholder="Password" onChange={(event) => setPw(event.target.value)}/>
                    <button type="button" onClick={togglePasswordVisibility} className='border-2 p-1 border-black rounded-l'>
                        {pwType === 'password' ? 'Göster' : 'Gizle'}
                    </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                </svg>
            </div>
            <button type={"button"} onClick={registerButton} className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
        </form>
    )
}

export default registerForm