import portfolio from './assets/images/portfolio.png'
import ecomm from './assets/images/ecomm.png'
import responsive from './assets/images/responsive.png'
import tech1m from './assets/images/tech1m.jpg'
import bb from './assets/images/bb.png'

export const myData = {
    userName: 'Egba Nnaemeka',
    bio: `Hi there! I'm, a frontend developer with a passion for crafting exceptional user experiences. With experience using React and JavaScript and Typescript, I specialize in building elegant and intuitive web applications. I'm excited to bring my expertise and enthusiasm to your next project, creating seamless and visually appealing experiences that leave a lasting impact.`,
    socialLinks : {
        github: {
            name: 'Github',
            URL: 'https://github.com/egba001'
        },
        linkedin: {
            name: 'Linkedin',
            URL: 'https://linkedin.com/in/egba-nnaemeka-2192b7235'
        },
        email: {
            name: 'Email',
            URL: 'mailto:emekason128@gmail.com'
        }
    },
}

export const skills = {
    languages : [
        "Javascript",
        "Typescript",
        "C"
    ],
    frameworks : [
        "React JS",
        "Next JS"
    ],
    tools : [
        "Redux",
        "Figma",
        "SCSS",
        "React Router",
        "Git and Github"
    ],
    libraries : [
        "Tailwind CSS",
        "Chakra UI"
    ]
}
export const projectList =  [
    {
        projectName: 'Tech1m Juniors LMS',
        stack: ['React', 'Javascript', 'Firebase', 'TailwindCSS'],
        description: 'Final project for the tech1m frontend development bootcamp prgram built using React, Tailwindcss, Firebase, Formik',
        githubRepo: 'https://github.com/egba001/Tech1m-group3-project',
        liveDemo: 'https://tech1m-group3-project.vercel.app/',
        image: tech1m
    },
    {
        projectName: 'React-Ecommerce Website',
        stack: ['React', 'ContextAPI', 'Fake Store API'],
        description: 'An e-commerce website built using React, TailwindCSS for styling, and data from Fakestore API',
        githubRepo: 'https://github.com/egba001/React-Ecommerce-Web-Application',
        liveDemo: 'https://e-commerce-egba001.vercel.app/',
        image: ecomm
    },
    {
        projectName: 'Responsive Landing Page',
        stack: ['HTML', 'CSS', 'Javascript', 'SCSS'],
        description: 'A responsive website created using HTML and SCSS. I explored responsive web design using CSS grid layout.',
        githubRepo: 'https://github.com/egba001/Responsive-Landing-page',
        liveDemo: 'https://campsite121.netlify.app/',
        image: responsive
    },
    {
        projectName: 'BB Assistant Landing Page',
        stack: ['HTML', 'CSS', 'Javascript'],
        description: 'A responsive website for a built using HTML and styled using CSS. This project explores the use of CSS flexbox to create responsive layouts',
        githubRepo: 'https://github.com/egba001/BB-Assistant-Landing-Page',
        liveDemo: 'https://funny-piroshki-3081ca.netlify.app/',
        image: bb
    },
    {
        projectName: 'Portfolio Website',
        stack: ['NextJS', 'TailwindCSS'],
        description: 'An e-commerce website built using React, TailwindCSS for styling, and data from Fakestore API',
        githubRepo: 'https://github.com/egba001/nextjs-portoflio',
        liveDemo: '#',
        image: portfolio
    }
]
