import Title from './Title';
import img from '../assets/moi.jpg';
import { BookOpenCheck, BugPlay, CalendarSync } from 'lucide-react';

const aboutSections = [
  {
    id: 1,
    title: "Software Tester",
    description:
      "I'm a Software Tester with over 4 years of experience in testing web applications. I have a solid background in both manual and automated testing. My TP are designed to cover all specified requirements, ensuring full compliance with the project specifications.",
    icon: <BugPlay className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Fullstack Web Development ",
    description:
      "I have a solid foundation in full-stack web development, with hands-on experience building websites and interactive applications. My goal is to collaborate effectively with the entire team and contribute to the creation of reliable and intuitive digital solutions.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Continuous Learning",
    description:
      "Curious and passionate about technology, I’m a fast learner who thrives on new challenges. I’m committed to continuous improvement and driven to deliver high-quality, future-ready solutions.",
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