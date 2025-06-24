import { Container, Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-base-300 py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Container className="w-10 h-10" />

        <p className="font-bold text-lg">
          Mel <span className="text-orange-600">SOFTWARE-TESTER</span>
        </p>

        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>

        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/m%C3%A9lanie-parmentier111/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://github.com/Memo-Day"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-current" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer