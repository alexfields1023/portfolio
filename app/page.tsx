import tripp from 'assets/tripp.jpg'
import Hero from 'components/Hero'
import Skills from 'app/_skills'
import About from 'app/_about'

export const metadata = {
  title: 'Alex Fields',
  description:
    'Senior Full Stack Engineer, Tennis player, and avid Weightlifter.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading={metadata.title}
        paragraph={metadata.description}
        image={tripp}
      />
      <About />
      <Skills />
    </>
  )
}
