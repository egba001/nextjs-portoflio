import { Header } from '../components/template/Header.js';
import 'remixicon/fonts/remixicon.css';
import { myData }  from '../myData.js';
import ProjectsSection from '../components/template/ProjectsSection.js';

export default function Home() {
  return (
    <div className='px-4 max-w-5xl'>
        <Header data={ myData } />
        <ProjectsSection />
    </div>
  )
}
