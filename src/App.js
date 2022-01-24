import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
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
      <Home />
       {/* UP TO TOP BTN */}
       <div className="btn_bottom_to_top">
            <a href="#" className="bottom_to_top">
              <FaAngleUp />
              <div className='btn_text'>Top</div>
            </a>
        </div>
    </div>
  );
}

export default App;
