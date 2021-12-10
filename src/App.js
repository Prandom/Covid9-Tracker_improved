import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import News from './components/news';
import CovidMap from './components/map';
import Navbar from './components/navbar';
// import Chart from './components/chart';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'


function App() {
  return (
      <div className="App">
        <Router>
          <Navbar className="opacity-100"/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Chart/> */}
            <Route path="/news" element={<News/>}/>
            <Route path="/map" element={<CovidMap/>}/> 
          </Routes>
          <Footer/>
        </Router>
      </div>
    // <div className="App">
    //     <Home/>
    //     <Footer/>
    // </div>
  );
}

export default App;
