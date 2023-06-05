import SkillComponent from './SkillComponent.js';
import { skills } from '../myData.js';
import SectionHeading from './SectionHeading.js';

const SkillsSection = () => {

    return (
        <section className='mb-16'>
            <SectionHeading title='skills' />
            <div className='grid text-white grid-cols-2 md:grid md:grid-cols-4 gap-6'>
                <div className="">
                    <h2 className='mb-6 text-purple-500'>Languages</h2>
                    {skills.languages.map((language, index) => {
                        return (
                            <SkillComponent title={language} key={index}/>
                        )
                    })}
                </div>
                <div className="">
                    <h2 className='mb-6 text-teal-500'>Frameworks</h2>
                    {skills.frameworks.map((framework, index) => {
                        return (
                            <SkillComponent title={framework} key={index} />
                        )
                    })}
                </div>
                <div className="">
                    <h2 className='mb-6 text-blue-500'>Tools</h2>
                    {skills.tools.map((tool, index) => {
                        return (
                            <SkillComponent title={tool} key={index} />
                        )
                    })}
                </div>
                <div className="">
                    <h2 className='mb-6 text-pink-500'>Libraries</h2>
                    {skills.libraries.map((library, index) => {
                        return (
                            <SkillComponent title={library} key={index}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;