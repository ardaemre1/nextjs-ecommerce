"use client"
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/app/store.js';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'; // Firebase'i düzgün bir şekilde yapılandırdığınızı varsayalım.
import Link from "next/link";
import app from "../firebaseConfig.js";

const auth = getAuth();

const Profile = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const [user, setUser] = useState(null); // Kullanıcı verisini saklamak için

    useEffect(() => {
        // Kimlik durumundaki değişiklikleri dinle
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Kullanıcı giriş yapmış
                setUser(user);
            } else {
                // Kullanıcı çıkış yapmış
                setUser(null);
            }
        });

        // Bileşen kaldırıldığında aboneliği temizle
        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = async (displayName, email , photoURL) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                email,
                photoURL,
            });

            // Profil başarıyla güncellendi, kullanıcı durumunu güncelle
            setUser(auth.currentUser);
        } catch (error) {
            console.error('Profil güncelleme hatası:', error.message);
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <div className='w-100 h-screen grid-cols-2 place-items-center md:grid hidden'>
                    <div className='grid-cols-1'>
                        <img
                            style={{ borderRadius: '20%', width:'350px',height:'350px' }}
                            src={user?.photoURL || 'https://picsum.photos/id/237/200/300'}
                            alt='Kullanıcı Resmi'
                            className='flex justify-center items-center'
                        />
                    </div>
                    <div>
                        <h2>{user?.displayName}</h2>
                        <p>{user?.email}</p>
                        <button onClick={() => handleUpdateProfile('Yeni İsim', 'yeni-foto-url')}>
                            Profili Güncelle
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex w-100 h-screen justify-center items-center'>Hesabınız Bulunamamaktadır. Lütfen Giriş İçin<Link href='/auth/login'> <span className='text-red-600 font-bold cursor-pointer ml-2'> Tıklayınız</span> </Link> </div>
            )}
        </div>
    );
};

export default Profile;
