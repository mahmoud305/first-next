"use client"
import Image from 'next/image'
import NLogo from "../../../public/next-js.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MyNavbar = () => {
  const navLiks=[
    { id:1 , name:"Home",path:"/home" },
    { id:2 , name:"About",path:"/about" },
    { id:3 , name:"Portofolio",path:"/portofolio" },
    { id:4 , name:"Contact",path:"/contact" },
]

const pathname = usePathname();
const isActive = (path: string) => path == pathname;



    return (
    // <div className='p-7 bgBaseColor'>
        

<nav className="bg-white border-gray-200 dark:bg-gray-900 bgBaseColor">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center  space-x-3 rtl:space-x-reverse">
        <Image src={NLogo}  alt={"Next Logo"} width={50} className='bg-transparent '/>
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Next Start</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bgBaseColor">
        
        {
            navLiks.map( link=> <li key={link.id} >
          <Link href={link.path} className={` block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent md:border-0 hover:text-blue-500 duration-200   ${isActive(link.path)?"text-sky-400":"text-white" } `}>
            {link.name}</Link>
        </li>
        )}

      </ul>
    </div>
  </div>
</nav>

    // </div>
  )
}
