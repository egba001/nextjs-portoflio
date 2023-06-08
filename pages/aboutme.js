import SkillsSection from "@/components/SkillsSection";

export default function AboutMe() {
  return (
    <div className='px-4 text-white flex justify-center h-full pt-32 font-thin mb-24'>
        <div className="max-w-5xl px-2">
            <h2 className="text-5xl mb-14">Frontend Developer with a <span className="border-b-8 font-extrabold border-b-pink-500">passion</span> for crafting pixel perfect User Interfaces</h2>
            <p className="font-thin text-lg leading-loose">Driven by a love for clean code and attention to detail, I thrive on transforming ideas into reality through creative problem-solving. My ability to adapt to new technologies and learn quickly allows me to stay ahead of the curve in an ever-evolving industry. <br />Collaboration is at the heart of my approach, as I believe in the power of teamwork and the exchange of ideas. I'm known for my strong communication skills, which enable me to effectively work with clients and colleagues to achieve project goals. When I'm not coding, you can find me exploring the latest design trends and continuously expanding my skill set. <br />I'm passionate about staying informed about industry advancements and sharing my knowledge with others. I'm excited to bring my expertise and enthusiasm to your next project, creating seamless and visually appealing experiences that leave a lasting impact. Let's work together to build something remarkable!</p>
            <button className="bg-pink-500 mt-10 rounded-full mb-32 px-12 py-2"><a href="#" target='_blank'>Get in touch</a></button>
            <SkillsSection />
        </div>
    </div>
  )
}
