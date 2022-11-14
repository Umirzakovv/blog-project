import { Link } from "react-router-dom"
import { FaStream } from "react-icons/fa"
import HamburgerContent from "../hamburger-content/hamburger-content";


import "./nav-logo.scss";
import LogoImg from "../../assets/images/logo-img.png";

const NavLogo = () => {
  const handleHamburgerClick = () => {
    console.log('ok');

  }

  return (
      <div className="nav-logo__wrapper">
        <Link className="logo-link" to="/"><img className="logo-img" src={LogoImg} alt="Logo img" />BoburBlog</Link>
        <FaStream className="hamburger-menu__icon" onClick={handleHamburgerClick} />
        <HamburgerContent />
      </div>
  )
}

export default NavLogo;   