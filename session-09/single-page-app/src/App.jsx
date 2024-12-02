import React from "react";
import Main from "./templates/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </Main>
      </BrowserRouter>
    )
  }
}

export default App;