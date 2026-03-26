import './App.css'
import GamePage from './components/GamePage'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/game-page" element={<GamePage />} />
    </Routes>
    </>
  )
}

export default App
