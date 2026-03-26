import "./App.css";
import Navigation from "./components/Navigation";
import { ContactHeader } from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import Background from "./components/Background";
import background from "./assets/contact.svg";
function App() {
  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      <Background src={background} alt="contact background" />
    </>
  );
}

export default App;
