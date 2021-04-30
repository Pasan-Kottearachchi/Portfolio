// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home/Home';

// function App() {
//   return (
//     <Home/>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
import "./App.css";
import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/" exact component={Home} />
           <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
