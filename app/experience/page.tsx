import Hero from 'components/Hero'
import Overview from 'app/experience/_overview'
import Offerings from 'app/experience/_offerings'

export const metadata = {
  title: '6+ years of professional experience',
  description: "I've built applications with modern tools and technologies",
}

const experiences = [
  {
    company: 'Gun.io',
    position: 'Senior Full Stack Engineer',
    period: '2020.9 - 2023.6',
    content: [
      'Led a team of 5 engineers, ensuring adherence to coding standards and maintaining a high-quality codebase through regular code reviews.',
      'Leveraged React, Node.js, TypeScript, GraphQL, and Docker to develop and maintain multiple applications with cutting-edge technologies.',
      'Implemented an event-driven and microservices architecture on AWS using Lambda, API Gateway, and Cognito, improving scalability, reliability, and cost-efficiency.',
      'Improved development productivity by 40% by adopting best practices like automated testing and establishing a comprehensive CI/CD pipeline.',
      'Created a library of 60+ reusable Storybook components to streamline development, speed up project delivery, and improve collaboration with designers and stakeholders.',
      'Mentored and provided valuable guidance to junior team members, creating a collaborative and growth-oriented environment within the team.',
    ],
  },
  {
    company: 'Dialexa',
    position: 'Full Stack Engineer',
    period: '2017.6 - 2020.8',
    content: [
      'Collaborated with an experienced development team in biweekly sprints.',
      'Converted Figma and Sketch designs into responsive and pixel-perfect web applications, using HTML5, CSS3, Material UI, and Bootstrap to create a visually appealing and seamless user experience.',
      'Created interactive data visualization charts and event timelines using D3.js, including a highly functional admin dashboard that boosted customer satisfaction by 50%.',
      'Optimized SQL queries and restructured the database schema, leading to a 35% reduction in response time and improved system performance.',
      'Used Jest and Mocha to create comprehensive test cases, achieving over 90% test coverage and ensuring the reliability and robustness of the applications.',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <Hero heading={`${metadata.title}.`} paragraph={metadata.description} />
      {experiences.map((experience) => (
        <Overview experience={experience} />
      ))}
      <Offerings />
    </>
  )
}
