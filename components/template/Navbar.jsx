import Link from "next/link";
import { UilMultiply, UilBars } from '@iconscout/react-unicons';
import { inter } from "../../app/fonts";
import { useState } from "react";

export const Navbar = () => {

    // Call use state to hold state for menu display on  mobile devices
    const [ visible, setVisible ] = useState(false);

    
    const showMenu = () => {
        setVisible(true);

        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const closeMenu = () => {
        setVisible(false);

        // Unsets Background Scrolling to use when SideDrawer/Modal is closed
        document.body.style.overflow = 'unset';
    }



    return (
        <div>
            <div className=" bg-darkGray backdrop-filter backdrop-blur-md bg-opacity-30 md:py-8 w-full flex items-center fixed top-0 left-0 z-50 py-6 justify-center">
                <div className="flex w-[1000px] justify-between px-4 lg:px-0">
                    <Link href='/'>
                        <h1 className={`${inter.className} text-sm text-white font-thin md:text-2xl`}>EN.</h1>
                    </Link>
                    <div className="cursor-pointer z-20 lg:hidden text-white">
                        {visible ? <button onClick={closeMenu}><UilMultiply /></button> : <button onClick={showMenu}><UilBars /></button>}
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
            </div>
            {visible &&
                    <div className={`flex flex-col fixed top-0 left-0 w-full justify-center z-10 h-screen items-center bg-darkGray transform delay-100 transition-all duration-300 ${
                        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                      }`}>
                        <ul className={`${inter.className} flex flex-col space-y-3 text-white font-thin text-md items-center justify-center`}>
                           <li onClick={closeMenu}>
                              <Link href='/'>Home</Link>
                           </li>
                           <li onClick={closeMenu}>
                              <Link href='/aboutme'>About</Link>
                           </li>
                           <li onClick={closeMenu}>
                              <Link href='/contact'>Contact</Link>
                           </li>
                        </ul>
                    </div>
                }
        </div>
    )
}