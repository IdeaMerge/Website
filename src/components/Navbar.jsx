import logo from '../assets/NavIcon.png';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6" >
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-18 h-20" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-3 text-2xl">
            <a href="https://www.linkedin.com/in/kushal-thandra-ab2465189/"><FaLinkedin/></a>
            <a href="https://github.com/kushalthandra"><FaGithub/></a>
            <a href='https://www.instagram.com/_kushalized_/'><FaInstagram /></a>
            <a href='https://wa.me/+917013447479'><FaWhatsapp/></a>
        </div>
    </nav>
  )
}

export default Navbar
