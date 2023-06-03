import Header from './../components/Header';
import SkillsSection from './../components/SkillsSection';
import 'remixicon/fonts/remixicon.css';
import { myData }  from './../myData.js';
import ProjectsSection from './../components/ProjectsSection';
import Footer from './../components/Footer';

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
