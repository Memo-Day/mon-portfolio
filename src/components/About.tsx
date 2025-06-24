import Title from './Title';
import img from '../assets/moi.jpg';
import { BookOpenCheck, BugPlay, CalendarSync } from 'lucide-react';

const aboutSections = [
  {
    id: 1,
    title: "Software Tester",
    description:
      "I'm Software Tester with +4 years of expérience in testing web applications. I have a strong background in manual and automated testing, with expertise in tools like Azure Devops, SoapUi, Gherkin and Postman. My goal is to ensure the highest quality of software products through rigorous testing and continuous improvement.",
    icon: <BugPlay className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Fullstack Web Development ",
    description:
      "I have a solid foundation in fullstack web development, with hands-on experience creating interactive applications such as a weather app that fetches real-time data from external APIs. I enjoy building both frontend and backend features using technologies like React, JavaScript, Node.js, Python, Visual Studio Code and Github. From personal portfolios to custom APIs, I love crafting intuitive and responsive user experiences while writing clean, maintainable code.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Continuous Learning",
    description:
      "During my experience (freelance and salary), I took the opportunity to explore various aspects of software testing and web development through personal projects and online training. This hands-on experience allowed me to deepen my knowledge of tools and frameworks while staying up to date with the latest trends in the tech world. I’m passionate about continuous learning and always looking for new challenges to grow my expertise and deliver high-quality solutions.",
    icon: <BookOpenCheck className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="About" />
      <div className="flex flex-col md:flex-row items-stretch space-x-0 md:space-x-10">
        {/* Image */}
        <img
          src={img}
          alt="Portrait"
          className="w-full md:w-96 object-cover rounded-xl mb-6 md:mb-0"
        />

        {/* Sections */}
        <div className="flex-1 space-y-6">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex items-start space-x-4 bg-base-100 p-4 rounded-lg shadow"
            >
              <div>{section.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{section.title}</h3>
                <p className="text-base-content">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;