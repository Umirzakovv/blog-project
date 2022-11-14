import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/images/logo-img.png"

const HamburgerHeader = () => {
  return(
    <div className="nav-logo__hamburger-content">
        <div className="nav-times">
          <Link className="logo-link" to="/"><img className="logo-img" src={LogoImg} alt="Logo img" />BoburBlog</Link>
          <FaTimes className="hamburger-times__icon"/>
        </div>
      </div>
  );
};

export default HamburgerHeader;