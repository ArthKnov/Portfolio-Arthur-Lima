import Contact from '../components/Contact.tsx'
import Education from '../components/Education.tsx'
import Experience from '../components/Experience.tsx'
import Extension from '../components/Extension.tsx'
import Hero from '../components/Hero.tsx'
import LanguagesSkills from '../components/LanguagesSkills.tsx'
import Projects from '../components/Projects.tsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Extension />
      <LanguagesSkills />
      <Projects />
      <Contact />
    </>
  )
}
