import Link from "next/link.js"
import Navbar from "./component/navbar.jsx";
import HomePage from '@/app/homePage/page.jsx'

export default function Home() {
  return (
      <>
          <HomePage className='flex flex-col justify-center items-center flex-wrap'/>
      </>
  )
}
