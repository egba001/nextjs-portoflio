import SectionHeading from "../atom/SectionHeading.js";
import { projectList } from '../../myData.js';
import ProjectComponent from '../molecules/ProjectComponent.js';

const ProjectsSection = () => {
    return (
        <section className="w-full flex flex-col mb-16 pb-16">
            <SectionHeading title='projects' />
            <div className="grid gap-6 gap-y-24 md:grid-cols-3 grid-cols-1">
                {projectList.map((project, index) => {
                    return <ProjectComponent projectDetails={project} key={index}/>
                })}
            </div>
            {/* <button className="px-24 py-4 border text-white mt-8 rounded-md w-fit mx-auto">View More</button> */}
        </section>
    )
}

export default ProjectsSection;