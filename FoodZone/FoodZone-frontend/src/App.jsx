import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import bg from "./assets/images/bg.png";
import FoodCard from "./components/FoodCard";
const BASE_URL = "http://localhost:5000";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const fetchFoodData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const foodData = await response.json();
      setLoading(false);
      setData(foodData);
      console.log(foodData);
    } catch (error) {
      setError(error.message);
    }
  }
    fetchFoodData();
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  return (
    <>
      <img src={bg} alt="background" className="bg" />
      <Header />
      <SearchResults />
      <FoodCard foods={data}/>
    </>
  );
}

export default App;
