import { useState } from "react";
import dice from './dice'
const GamePage = () => {
    const [score, setScore] = useState(0);
    const [choice, setChoice] = useState(null);
    const [isRolling, setIsRolling] = useState(false);
    const [diceNumber, setDiceNumber] = useState(1);
    const [showInstructions, setShowInstructions] = useState(true);
    const handleDiceRoll = () => {
        if (choice === null) {
            alert("Please select a number first!");
            return;
        }
        setIsRolling(true);
        const randomChoice = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomChoice);
        setTimeout(() => {
            setIsRolling(false);
        }, 300);
        if (randomChoice === choice) {
            setScore(prevScore => prevScore + 1);
        } else {
            setScore(prevScore => {
                if (prevScore === 0) return 0;
                return prevScore - 1;
            });
        }
    }
    const handleChoice = (num) => {
        setChoice(num);
    }
    const resetScore = () => {
        setScore(0);
    }
    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    }
    return (
        <>
            <div className="game-container">
                <div className="score">
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
                <div className="choice">
                    <ul>
                        <li onClick={() => handleChoice(1)} className={choice === 1 ? "selected": ""}>1</li>
                        <li onClick={() => handleChoice(2)} className={choice === 2 ? "selected": ""}>2</li>
                        <li onClick={() => handleChoice(3)} className={choice === 3 ? "selected":""}>3</li>
                        <li onClick={() => handleChoice(4)} className={choice === 4 ? "selected":""}>4</li>
                        <li onClick={() => handleChoice(5)} className={choice === 5 ? "selected":""}>5</li>
                        <li onClick={() => handleChoice(6)} className={choice === 6 ? "selected":""}>6</li>
                    </ul>
                </div>
            </div>
            <div className="dice-container">
                <div className="dice">
                    <img onClick={()=>handleDiceRoll()} src={dice[diceNumber].image} alt="Dice" className={isRolling ? "rolling" : ""}/>
                </div>
            </div>
            <div className="game-settings">
                <button onClick={toggleInstructions}>Instructions</button>
                <p class={showInstructions ? "instructions": "hide-instructions"}>
                    Select a number from 1 to 6 from the top right corner, then click on the dice to roll. If the number on the dice matches your selection, you earn a point. If it doesn't match, you lose a point. Try to get as many points as possible!
                </p>
                <button onClick={resetScore}>reset game</button>
            </div>
        </>
    )
}
export default GamePage;