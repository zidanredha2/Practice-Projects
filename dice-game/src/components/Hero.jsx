import hero from '../assets/hero.png'
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-image">
                <img src={hero} alt="dice image" />
            </div>
            <div className="hero-menu">
                <h1 className="hero-title">DICE GAME</h1>
                <Link className="link-content" to="game-page">
                    <div className="link">
                    PLAY NOW
                    </div>
                </ Link>
            </div>
        </div>
    )
}
export default Hero;