// import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Project from "./Components/Projects/project"
import Skill from './Components/Skills/Skills'
import Footer from './Components/Footer'
import Contact from "./Components/Contact"


function App() {
   return (
      <div>
         <Navbar />
         <Hero />
         <Skill />
         <Services />
         <Project />
         <Contact/>
         <Footer />
      </div>
   );
}

export default App;
