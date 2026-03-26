import logo from "./images/logo.svg";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <Navbar />
      <div className="search">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};
export default Header;
