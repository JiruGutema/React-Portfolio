import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";
import GDSCCertificate from "./assets/Jiru.pdf";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />
                <About />
                <Services />
                <Projects />
                <Testimony />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/contacts" element={""} />
          {/* <Route path="/CV" element={<CV />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
