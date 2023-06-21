import Hero from 'components/Hero'

export const metadata = {
  title: 'Page Not Found',
  description: 'No page found. Please try again.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading="You look lost."
        paragraph="Looks like you attempted to visit a page that does not exist. Let's get you back on track."
      />
    </>
  )
}
