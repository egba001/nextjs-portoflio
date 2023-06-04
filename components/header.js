import Link from "next/link";
import Button from "./button";
import { useState } from "react";
import { UilBars, UilMultiply } from '@iconscout/react-unicons';
import { UilGithub, UilLinkedin, UilEnvelope, UilArrowDown } from '@iconscout/react-unicons';
import { inter } from '../app/fonts.js';
import { headerFont } from "../app/fonts.js";

const Header = ({ data }) => {
    const {userName, bio, socialLinks} = data;

    // Call use state to hold state for menu display on  mobuile devices
    const [ visible, setVisible ] = useState(false)

    return (
        <div className="bg-darkGray mb-20 md:mb-20 h-fit max-w-5xl relative">
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
                               <Link href='../aboutme'>Home</Link>
                            </li>
                           <li className="hover:text-purple-400">
                              <Link href='#'>About</Link>
                            </li>
                           <li className="hover:text-purple-400">
                              <Link href='#'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
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
            <div className='w-full h-fit pt-32'>
                <p className='font-thin text-2xl text-white md:mb-6 cursor-pointer'>Hey, I'm</p>
                <h1 className={`${headerFont.className} text-6xl cursor-pointer break-words animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold md:text-8xl pb-2 leading-snug`}>{userName}</h1>
                <div className="mt-2 md:mt-8 text-white leading-loose font-thin">
                    <p>{bio}</p>
                </div>
            </div>
            <div className="flex w-full flex-wrap mt-12 mb-4 space-x-3 text-white md:mb-8 ">
                <Button linkTo={socialLinks.linkedin.URL}>
                    <UilLinkedin />
                </Button>
                <Button linkTo={socialLinks.github.URL}>
                    <UilGithub />
                </Button>
                <Button linkTo={socialLinks.email.URL}>
                    <UilEnvelope />
                </Button>
            </div>
            <button className='py-2 px-10 rounded-full text-white bg-purple-500'>Download CV</button>
            <div className="hidden md:block animate-bounce text-white absolute right-6 bottom-12 text-2xl">
                <UilArrowDown size='50'/>
            </div>
        </div>
    )
}

export default Header;