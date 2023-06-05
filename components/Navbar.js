import Link from "next/link";
import { UilMultiply, UilBars } from '@iconscout/react-unicons';
import { inter } from "../app/fonts";
import { useState } from "react";

const Navbar = () => {

    // Call use state to hold state for menu display on  mobuile devices
    const [ visible, setVisible ] = useState(false)

    return (
        <div className=" bg-darkGray backdrop-filter backdrop-blur-md bg-opacity-30 md:py-8 w-full flex items-center fixed top-0 left-0 z-50 py-6 justify-center">
                <div className="flex w-[1000px] justify-between px-4 lg:px-0">
                <Link href='/'>
                    <h1 className={`${inter.className} text-sm text-white font-thin md:text-2xl`}>EN.</h1>
                </Link>
                <div className="cursor-pointer z-20 lg:hidden text-white" onClick={() => setVisible(!visible)}>
                    {visible ? <UilMultiply /> : <UilBars />}
                </div>
                <div className="hidden lg:block">
                    <nav className="w-full">
                        <ul className={`${inter.className} flex text-white font-thin space-x-10 text-md items-center justify-center`}>
                           <li className="hover:text-purple-400">
                               <Link href='/'>Home</Link>
                            </li>
                           <li className="hover:text-purple-400">
                              <Link href='/aboutme'>About</Link>
                            </li>
                           <li className="hover:text-purple-400">
                              <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
                {visible &&
                    <div className={`fixed flex top-0 w-full justify-center z-10 h-full items-center bg-darkGray transform delay-100 transition-all duration-300 ${
                        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                      }`}>
                        <ul className={`${inter.className} flex flex-col space-y-3 text-white font-thin text-md items-center justify-center`}>
                           <li>
                              <Link href='#'>Projects</Link>
                           </li>
                           <li>
                              <Link href='#'>Resume</Link>
                           </li>
                           <li>
                              <Link href='#'>Contact</Link>
                           </li>
                        </ul>
                    </div>
                }
            </div>
    )
}

export default Navbar;