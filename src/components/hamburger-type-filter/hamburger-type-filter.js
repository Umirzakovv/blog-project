import "./hamburger-type-filter.scss";

const HamburgerTypeFilter = () => {
  return(
    <form className="hamburger-type__filter">  
      <label className="type-filter__label">
        <input defaultChecked className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">All</span>
      </label>  
      <label className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">Design Theory</span>
      </label>
      <label className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">UX</span>
      </label>
      <label className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">UI</span>
      </label>
      <label className="type-filter__label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type" />
        <span className="type-filter__styled-radio">Typography</span>
      </label>
    </form> 
  )
};

export default HamburgerTypeFilter;