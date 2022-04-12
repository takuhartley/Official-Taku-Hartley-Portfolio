import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";

// Style
const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
