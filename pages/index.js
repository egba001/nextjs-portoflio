import Header from '../components/Header.js';
import SkillsSection from '../components/SkillsSection.js';
import 'remixicon/fonts/remixicon.css';
import { myData }  from '../myData.js';
import ProjectsSection from '../components/ProjectsSection.js';
import Footer from './../components/Footer.js';

export default function Home() {
  return (
    <div className='px-4'>
        <Header data={ myData } />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
    </div>
  )
}
