import logo from "./../assets/logo.png";

const Navigation = () => {
  return (
    <nav>
      <img className="nav-logo" src={logo} alt="" />
      <div className="nav-items">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
