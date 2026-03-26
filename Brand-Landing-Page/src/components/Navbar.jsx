import brandLogo from "./../assets/Images/brand_logo.png"
const Navbar = () => {
    return (
        <div className="container">
        <img src={brandLogo} alt="Brand Logo" />
        <nav>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <button>Login</button>
        </div>
    )
}
export default Navbar;