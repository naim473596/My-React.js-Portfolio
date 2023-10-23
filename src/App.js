
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";
import Home from "./Component/Home";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import NotFound from "./Component/NotFound";




function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>



    
    </>
  );
}

export default App;
