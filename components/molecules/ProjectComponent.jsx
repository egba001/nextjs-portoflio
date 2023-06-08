import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const ProjectComponent = ({ projectDetails }) => {
    const { projectName, stack, description, githubRepo, liveDemo, image } = projectDetails;

    return (
        <div className='rounded-md h-[450px] justify-between text-white flex flex-col space-y-6'>
            <div className='w-full h-[45%] rounded-md relative overflow-hidden'>
                <Image
                    src={image}
                    fill={true}
                    quality={100}
                    alt='Project view'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover'/>
            </div>
            <h2 className='text-white font-thin text-xl'>{projectName}</h2>
            <p className='text-white font-thin text-xs'>{description}</p>
            <div className='font-thin text-xs flex space-x-1 text-[#6CACE4]'>{stack.map((obj, index) => <p key={index}>{obj === stack[0] ? `${obj}` : `-  ${obj}`}</p>)}</div>
            <div className='flex space-x-6 items-center'>
                <a href={liveDemo} target='_blank'>
                    <button className='flex space-x-2 border rounded-md p-4 font-thin'>
                        <AiOutlineLink className='font-bold'/>
                        <span className='text-xs'>Live Demo</span>
                    </button>
                </a>
                <a href={githubRepo} target='_blank'>
                    <BsGithub className='text-4xl'/>
                </a>
            </div>
        </div>
    )
}

export default ProjectComponent;