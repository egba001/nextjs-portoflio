import Link from "next/link";
import Button from "../atom/Button.jsx";
import { UilGithub, UilLinkedin, UilEnvelope, UilArrowDown } from '@iconscout/react-unicons';
import { headerFont } from "../../font/fonts.js";
import { Navbar } from "./Navbar.jsx";

export const Header = ({ data }) => {
    const {userName, bio, socialLinks} = data;

    return (
        <div className="bg-darkGray mb-20 md:mb-20 h-fit max-w-5xl relative">
            <Navbar />
            <div className='w-full h-fit pt-32'>
                <p className='font-thin text-2xl text-white md:mb-6 cursor-default'>Hey, I'm</p>
                <h1 className={`${headerFont.className} text-6xl cursor-default break-words animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold md:text-8xl pb-2 leading-snug`}>{userName}</h1>
                <div className="mt-2 md:mt-8 text-white leading-loose font-thin cursor-default">
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
            <button className='py-2 px-10 rounded-full text-white bg-purple-500'><a href="https://docs.google.com/document/d/1WxUtYY6OGZVeVUEMcetEBznC5qZL3_KITk6SyK62lB8/edit?usp=sharing" target='_blank'>Download CV</a></button>
            <div className="hidden md:block animate-bounce text-white absolute right-6 bottom-12 text-2xl">
                <UilArrowDown size='50'/>
            </div>
        </div>
    )
}
