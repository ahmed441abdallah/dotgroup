import Navbar from "./component/Navbar";
import React, { Fragment } from "react";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./component/Conatct";
import "./App.css";
import Gallery from "./component/ImageGallery";
import Services from "./component/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/cv" element={<Resume></Resume>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        </Routes>
        <Footer></Footer>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
