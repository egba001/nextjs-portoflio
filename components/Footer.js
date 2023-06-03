import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SectionHeading from "./SectionHeading";

const Footer = () => {

    const details = {
        email: 'mailto:emekson128@gmail.com',
        linkedin: 'https://linkedin.com/in/egba-nnaemeka-2192b7235',
        github: 'https://github.com/egba001'
    }

    return (
        <footer className="pb-24">
            <SectionHeading title='contact' />
            <div className="flex flex-col md:items-center md:flex-row md:space-x-4">
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

export default Footer;