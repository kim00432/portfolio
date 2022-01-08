import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Switch, Route } from "react-router-dom"


function App() {
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
    </div>
  );
}

export default App;
