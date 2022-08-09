import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar/index.jsx';
import './App.css';
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import Users from './pages/Users';

const App = () => {

  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
        <div className="container">
          <Drawer isOpened={isOpened} />
          <Routes className="main">
            <Route path='/users' element={<Users />}/>
            <Route path="/" element={<Dashboard />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
};

export default App;
