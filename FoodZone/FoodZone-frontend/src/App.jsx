import "./App.css";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import bg from "./components/images/bg.png";
function App() {
  return (
    <>
      <img src={bg} alt="background" className="bg" />
      <Header />
      <SearchResults />
    </>
  );
}

export default App;
