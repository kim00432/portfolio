import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Switch, Route } from "react-router-dom"
import { FaAngleUp } from "react-icons/fa"

function App() {
  //  Up To Top Btn
  window.addEventListener("scroll", function(){
  const upToTop = document.querySelector("a.bottom_to_top");
      upToTop.classList.toggle("active", window.scrollY > 0)
  })

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} exact/>
      </Switch>
      <Footer />
       <div className="btn_bottom_to_top">
            <a href="#" className="bottom_to_top">
              <FaAngleUp />
            </a>
        </div>
    </div>
  );
}

export default App;
