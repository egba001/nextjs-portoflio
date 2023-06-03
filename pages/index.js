import Header from '../components/Header.js';
import SkillsSection from '../components/SkillsSection.js';
import 'remixicon/fonts/remixicon.css';
import { myData }  from '../myData.js';
import ProjectsSection from '../components/ProjectsSection.js';
import Footer from './../components/Footer.js';

const baseURL = 'https://api.github.com/users/egba001/repos';

// export async function getStaticProps() {
//     const response = await fetch(baseURL);
//     const userDetails = await response.json();
//     console.log(userDetails);
//     return {
//       props: {
//         userDetails
//       }
//     }
// }


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
