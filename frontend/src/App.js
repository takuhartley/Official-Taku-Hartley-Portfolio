// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import Banner from "./pages/Banner/Banner";
// Style
const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
