import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from "@/app/component/navbar.jsx";
import Footer from "@/app/component/footer.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
        </head>
        <body className='bg-white' style={{ margin: 0, minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto', overflowX:'hidden' }}>
        <Navbar />
        <main className={inter.className} >
            {children}
        </main>
        <Footer />
        <ToastContainer/>
        </body>
        </html>
    );
}
