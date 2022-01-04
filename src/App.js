import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </div>
  );
}

export default App;
