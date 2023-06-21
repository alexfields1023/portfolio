export default function ExperienceOverview(props) {
  const { experience } = props
  return (
    <section id="overview" className="container section-spacing lg:text-lg">
      <h2 className="h2">{experience.position + '@' + experience.company}</h2>
      <p className="mt-8">{experience.period}</p>
      {experience.content.map((item) => (
        <p className="mt-8">{item}</p>
      ))}
    </section>
  )
}
