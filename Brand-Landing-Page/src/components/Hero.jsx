import { useState } from 'react';
import redProduct from '../assets/Images/hero-image.png'
import blueProduct from '../assets/Images/hero-blue.png'
const Hero = () => {
    const [heroColor, toggleColor] = useState(false);
    const clickHandler = () => {
        toggleColor(!heroColor);
    }
    return (
        <div className="hero">
            <div className="description">
            <h1>Walk Away.</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
            <button>Learn More</button>
            </div>
            <div className="product">
                {heroColor ? <img src={redProduct} onClick={clickHandler} alt="Product Image" /> : <img src={blueProduct} onClick={clickHandler} alt="Product Image" />}
            </div>
        </div>
    )
}
export default Hero;