import React, {} from "react";

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import MainPage from "./components/MainPageComponent";
import DetailsPageComponent from "./components/DetailsPageComponent";

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent/>
      </div>
      <div>
        <Routes>
          <Route exact path = "/" Component={MainPage}></Route>
          <Route exact path="/details" Component={DetailsPageComponent}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;