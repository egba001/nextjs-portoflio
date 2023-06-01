import { Inter } from "next/font/google";
import Link from "next/link";
import { myData } from '@/myData';
import Button from "./button";
import { useState } from "react";
import { UilBars, UilMultiply } from '@iconscout/react-unicons';
import localFont from 'next/font/local';
import { UilGithub, UilLinkedin, UilEnvelope, UilArrowDown } from '@iconscout/react-unicons';

const headerFont = localFont({src: '../assets/fonts/GTWalsheimPro-Bold.woff2'});

export const inter = Inter({
    weight: '100',
    subsets: ['latin'],
    style: 'normal',
})


const Header = () => {
    const {userName, bio, socialLinks: {github, linkedin, email}} = myData;

    // Call use state to hold state for menu display on  mobuile devices
    const [ visible, setVisible ] = useState(false)

    return (
        <div className="md:h-screen bg-darkGray pb-10 h-fit w-full relative">
            <div className="px-6 md:px-36 bg-darkGray backdrop-filter backdrop-blur-md bg-opacity-30 md:py-8 w-full flex items-center fixed top-0 left-0 z-50 py-6 justify-between">
                <Link href='/'>
                    <h1 className={`${inter.className} text-sm text-white font-thin md:text-2xl`}>EN.</h1>
                </Link>
                <div className="cursor-pointer z-20 md:hidden text-white" onClick={() => setVisible(!visible)}>
                    {visible ? <UilMultiply /> : <UilBars />}
                </div>
                <div className="hidden lg:block">
                    <nav className="w-full">
                        <ul className={`${inter.className} flex text-white font-thin space-x-10 text-md items-center justify-center`}>
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
            <div className='max-w-full mx-4 h-fit pt-32'>
                <p className='font-thin text-2xl text-white md:mb-6'>Hey, I'm</p>
                <h1 className={`${headerFont.className} text-6xl break-words animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold md:text-8xl leading-snug`}>{userName}</h1>
                <p className="mt-2 md:mt-8 text-white leading-loose font-thin">
                    <p>{bio}</p>
                </p>
            </div>
            <div className="flex gap-1 mx-4 max-w-full flex-wrap mt-12 space-x-3 text-white md:bottom-28 ">
                <Button linkTo={linkedin.URL}>
                    <UilLinkedin />
                </Button>
                <Button linkTo={github.URL}>
                    <UilGithub />
                </Button>
                <Button linkTo={email.URL}>
                    <UilEnvelope />
                </Button>
            </div>
            <div className="animate-bounce text-white absolute right-0 bottom-24 text-2xl">
                <UilArrowDown size='50'/>
            </div>
        </div>
    )
}

export default Header;