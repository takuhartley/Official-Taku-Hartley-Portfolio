import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";

// Style
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
