import HamburgerHeader from "../hamburger-header/hamburger-header"
import HamburgerTypeFilter from "../hamburger-type-filter/hamburger-type-filter";
import Container from "../../components/container/container"

import "./hamburger-content.scss";

const HamburgerContent = () => {
  return(
    <Container className="hamburger-wrapper">
      <HamburgerHeader /> 
      <HamburgerTypeFilter />
    </Container>
  );
};

export default HamburgerContent;