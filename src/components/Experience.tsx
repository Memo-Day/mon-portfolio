import Title from './Title';

import imgPOSTMAN from "../assets/techno/postman.png";
import imgSOAPUI from "../assets/techno/soapui.png";
import imgJIRA from "../assets/techno/jira.png";
import imgAZURE from "../assets/techno/azure_devops.png";
import imgVSCODE from "../assets/techno/vscode.png";
import imgGITHUB from "../assets/techno/github.png";
import imgJS from "../assets/techno/js.png";
import imgPYTHON from "../assets/techno/python.png";
import imgREACT from "../assets/techno/react.png";

import owf from "../assets/companies/owf.png";
import mamanslouves from "../assets/companies/mamanslouves.png";
import utest from "../assets/companies/utest.png";
import itdigitalfox from "../assets/companies/itdigitalfox.png";

const skills = [
  { id: 1, name: "Postman", image: imgPOSTMAN },
  { id: 2, name: "SoapUI", image: imgSOAPUI },
  { id: 3, name: "Jira", image: imgJIRA },
  { id: 4, name: "Azure DevOps", image: imgAZURE },
  { id: 5, name: "Visual Studio Code", image: imgVSCODE },
  { id: 6, name: "GitHub", image: imgGITHUB },
  { id: 7, name: "JavaScript", image: imgJS },
  { id: 8, name: "Python", image: imgPYTHON },
  { id: 9, name: "React", image: imgREACT },
];

const experiences = [
  {
    id: 1,
    image: owf,
    company: "OWF",
    role: "Software Tester",
    period: "2020 - 2021",
    description: [
      "Testing cross-functional projects within the IT after-sales service chain with a multidisciplinary team.",
      "Participated in daily meetings, bug reviews, Go/NoGos, REX, and defect tracking in Jira, Xray, and Azure DevOps.",
      "Functional, validation, integration and automation testing",
    ],
  },
  {
    id: 2,
    image: mamanslouves,
    company: "Mamans Louves",
    role: "Software Tester",
    period: "2023 - 2024",
    description: [
      "Participated in the creation of the website according to the roadmap, drafted specifications, and managed the backlog.",
      "Monitored bugs and wrote test reports.",
      "Functional, UI, and accessibility testing.",
    ],
  },
  {
    id: 3,
    image: utest,
    company: "UTest/Applause",
    role: "Software Tester",
    period: "2024 - 2025",
    description: [
      "Execution of tests on various platforms (web browsers, Android mobile apps) in Linux and Windows env.",
      "Identification and documentation of anomalies in structured bug reports.",
      "Functional, UI, and accessibility testing."
    ],
  },
  {
    id: 4,
    image: itdigitalfox,
    company: "IT Digital Fox",
    role: "Founder",
    period: "2024 - 2025",
    description: [
      "Agency specializing in QA testing.",
      "Remote collaboration with French and international companies.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="Experience">
      <Title title="Experience" />

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-4">
        {/* Skills à gauche */}
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col justify-center items-center">
              <div className="w-24 h-24 p-2 rounded-full border-2" style={{ borderColor: '#EA580C' }}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Experiences à droite */}
        <div className="md:w-2/3 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col md:flex-row items-start md:items-center bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <img
                src={experience.image}
                alt={experience.company}
                className="object-cover h-10 w-10"
              />
              <div className="ml-4">
                <h1 className="text-lg font-bold" style={{ color: '#EA580C' }}>
                  {experience.role}, {experience.company}
                </h1>
                <span className="text-sm">{experience.period}</span>

                <ul className="mt-2 list-disc list-inside text-sm text-white">
                  {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;