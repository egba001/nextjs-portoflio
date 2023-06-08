import Link from "next/link.js";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SectionHeading from "./SectionHeading.js";

export const Footer = () => {

    const details = {
        email: 'mailto:emekson128@gmail.com',
        linkedin: 'https://linkedin.com/in/egba-nnaemeka-2192b7235',
        github: 'https://github.com/egba001'
    }

    return (
        <footer className="pb-24 w-full px-4 lg:px-0">
            <div>
            <SectionHeading title='contact' />
            <div className="flex justify-between items-start">
                <h2 className="font-bold text-3xl text-white">EN</h2>
                <div className="text-white hidden md:block">
                    <nav>
                        <ul className="space-y-4">
                            <li className="hover:text-purple-500"><Link href='/'>Home</Link></li>
                            <li className="hover:text-purple-500"><Link href='/aboutme'>About</Link></li>
                            <li className="hover:text-purple-500"><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col items-end pr-2 lg:pr-0 md:items-center md:flex-row md:space-x-4">
                    <ButtonLink purpose='send an email' link={details.email}>
                        <AiOutlineMail />
                    </ButtonLink>
                    <ButtonLink purpose='linkedin' link={details.linkedin}>
                        <BsLinkedin />
                    </ButtonLink>
                    <ButtonLink purpose='github' link={details.github}>
                        <BsGithub />
                    </ButtonLink>
                </div>
            </div>
            </div>
        </footer>
    )
}

const ButtonLink = ({ purpose, link, children }) => {
    return (
        <a href={link} target='_blank'>
            <button className="px-10 flex text-sm mb-4 md:text-md uppercase items-center text-white border rounded-sm py-2 font-thin">
                {children}
                <span className="ml-3">{purpose}</span>
            </button>
        </a>
    )
}