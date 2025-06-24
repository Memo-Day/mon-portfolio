import Title from "./Title"


import portfolio from '../assets/projects/portfolio.png';
import pdtowf from '../assets/projects/pdtowf.png';
import utest1 from '../assets/projects/utest1.png';
import mamanslouves1 from '../assets/projects/mamanslouves1.png';
import itfox from '../assets/projects/itfox.png';
import article1 from '../assets/projects/article1.png';
import githubmemo from '../assets/projects/githubmemo.png';
import javascript from '../assets/projects/JS.png';
import python from '../assets/projects/python.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Frontend Web Application',
        description: 'Creation of a modern and responsive portfolio, demonstrating my skills in UI/UX design, my interest in modern front-end development, and my mastery of web deployment. The project emphasizes performance, accessibility, and a seamless user experience.',
        technologies: ['React', 'Node.js', 'Netlify', 'Tailwind CSS', 'Visual Studio Code', 'bash', 'DaisyUI', 'Vite', 'GitHub'],
        demoLink: '# à venir',
        repoLink: '#à venir',
        image: portfolio,
    },
    {
        id: 2,
        title: 'Software tester',
        description: `Cross-functional after-sales IT project (SI SAV) to OWF, within a team of 7 PO, 1 MOA/MOE, 1 Architect, 1 Dev, and 1 Quality Manager.
        Performed functional, integration, validation, and NR testing in Gherkin. Participated in Go/NoGo committees and provided technical support to project teams.
        Managed bug tracking and test coverage using truth tables,
        Actively contributed to REX and agile ceremonies.`,
        technologies: ['Jira', 'Xray', 'Azure Devops', 'SoapUi', 'Postman', 'Excel', 'JSon', 'WSDL', 'Gerkhin','Confluence'],
        demoLink: '#https://wholesalefrance.orange.fr/en/',
        image: pdtowf,
    },
    {
        id: 3,
        title: 'Software Tester / Data Analyst',
        description: `Participated in functional, performance, localization, validation, and security test campaigns on websites (Windows / Arch Linux) and mobile apps in production environments.
        Conducted use case evaluations, compliance checks, quality reviews, bug reproduction, and detailed reporting as part of an international collaboration in a crowdtesting context.`,
        technologies: ['Charles Proxy', 'Console', 'Handbrake', 'Pinta', 'Mobile Android', 'API','Utest Platform'],
        demoLink: '#https://www.utest.com/',       
        image: utest1,
    },
    {
        id: 4,
        title: 'Software tester / Project Coordinator',
        description: `Participation in the redesign of the UI in a production environment.
        Acted as a liaison between clients, users, dev, and DevOps.
        Contributed to the website development according to business needs and the roadmap: backlog analysis, writing user stories, performing functional tests, UI and accessibility testing, bug tracking, and test reporting.`,
        technologies: ['Wordpress', 'Wordfence', 'Varnish','Squash TM', 'Confluence'],
        demoLink: '#https://www.mamanslouves.org/',
        image: mamanslouves1,
    },
    {
        id: 5,
        title: 'Founder',
        description: `Founded of  IT Digital Fox, a freelance tech company based in Stockholm, specialized in digital strategy, dev and QA testing.
        Delivered web and mobile solutions for European clients, including UI/UX design, content integration, and functional testing.
        Collaborated remotely with international teams in Agile environments, acting as a bridge between business, developers, and testers.`,
        technologies: ['Arch Linux', 'Windows', 'Squash TM', 'Jira', 'xray'],
        demoLink: 'https://www.linkedin.com/in/emmanuel-bellasino/',
        image: itfox,
    },
    {
        id: 6,
        title: ' Dockerized Deployment of Squash TM',
        description: `Dockerized Deployment of Squash TM (Open Source Test Management Tool)
        Set up Squash TM locally on ArchLinux using Docker with persistent data storage.
        Configured Docker volumes and services for automated container management and data retention across reboots.
        Accessible via http://localhost:8090/squash/.`,
        technologies: ['Doker', 'Bash', 'Squash TM'],
        demoLink: '#https://www.linkedin.com/pulse/archlinux-comment-installer-squash-tm-open-source-avec-parmentier-xq1ue/',
        image: article1,
    },
    {
        id: 7,
        title: 'Git & GitHub Workflow Practice ',
        description: 'Hands-on experience with Git: repository creation and management, collaboration through pull requests, workflow structuring with Git Flow, and version control.',
        technologies: ['Git', 'Github', '.gitignore','Console', ],
        demoLink: '#https://github.com/Memo-Day?tab=repositories',
        repoLink: '#https://github.com/Memo-Day',
        image: githubmemo,
    },
        {
            id: 8,
            title: 'JavaScript Certification – SheCodes',
            description: `Completed a certified course on the fundamentals of JavaScript: variables, conditions, functions, DOM manipulation, and event handling.
    Built interactive mini-projects to apply learned concepts (digital clock, portfolio, weather app)`,
            technologies: ['html', 'css', 'TypeScript', 'JavaScript', 'React', 'Node.js', 'Arch Linus'],
            demoLink: '#https://www.shecodes.io/',
            repoLink: '#',
            image: javascript,
        },
    {
        id: 9,
        title: 'Python Weather App – Terminal Forecast Tool',
        description: `Developed as part of a certified Python training program, this terminal-based weather app fetches real-time weather data from a public API and displays it using the Rich library for enhanced readability.
        The project highlights API interaction, JSON parsing, and clean, modular Python coding practices.`,
        technologies: ['Replit', 'Python', 'JSon', 'Rich', 'Requests', 'API', 'CSV', 'Matplotlib', 'Jupyter'],
        demoLink: '#https://www.shecodes.io/',
        repoLink: '#https://github.com/Memo-Day/weather-app-python',
        image: python,
    },
];
const Projects = () => {
  return (
    <div id="Projects" className="mt-10">
      <Title title="Projects" />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 rounded-xl shadow-lg mb-8 flex flex-col justify-between"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl h-54 object-cover rounded-t-lg mb-4"
              />
              <h1 className="text-orange-500 text-xl font-semibold mb-2">
                {project.title}
              </h1>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="text-orange-500 px-3 py-1 rounded-full text-sm bg-orange-100 bg-opacity-10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-1 bg-orange-600 hover:underline flex items-center justify-center"
                >
                  <Video className="mr-2" /> Demo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-1 btn-neutral hover:underline flex items-center justify-center"
                >
                  <Github className="mr-2" /> Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div> // ← cette balise de fermeture manquait
  );
};

export default Projects;