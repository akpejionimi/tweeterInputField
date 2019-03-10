import React from "react";
import ReactDOM from "react-dom";
import Tweeter from './Tweetinput/Tweetcount.jsx';
import Navbar from './Navbar/Navbar.jsx'


import "./styles.css";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Tweeter/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
