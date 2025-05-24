import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className="mb-20 fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-gradient-to-b from-[#0b0b0d] via-[#0e0e15] to-[#13131ddf] text-white">
        <div className="flex flex-shrink-0 items-center text-2xl gap-1">
            <img src={logo} alt="logo" className="size-12 rounded-2xl" />
            <a href="#hero">Harshi Jain</a>
        </div>
        <div className="pl-140 m-6 flex items-center justify-center gap-4 ">
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Work</a>
            <a href="">Project</a>
            <a href="">Contact</a>
        </div>
        <div className="m-6 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/harshi-jain-b72903288"><FaLinkedin/></a>
            <a href="https://github.com/JainHarshi30"><FaGithub/></a>
            <a href="https://www.instagram.com/jainharshi_?igsh=MXJodzUyejB3d2drcg=="><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
