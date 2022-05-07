import './App.css';
import Login from './login/Login';
import React from 'react';
import "./style.css"
import Navbarlogin from './login/navbar';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Register from './login/register';
import Body from './Components/Body';
import Network from './Components/Network';
import Profile from './Components/Profile';
import Jobs from './Components/Jobs';
import Notification from './Components/Notification';
import Message from './Components/Message';
// import store from './Redux/store';
// import { login } from './Redux/action';

function App() {
  const [islogedin, setlogedin] = React.useState('')
  // console.log(localStorage.getItem("tokenIs"),"before code")
  return (
    <div className="App">
      {localStorage.getItem("tokenIs") === null ? 
       <Routes>
        <Route path="/" element={<Navbarlogin />} ></Route>
        <Route path="/login" element={<Login setlogedin={setlogedin} islogedin={islogedin} />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
      </Routes>
     :
       <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Body />} ></Route>
          <Route path="/profile" element={<Profile />} ></Route>
          <Route path="/jobs" element={<Jobs />} ></Route>
          <Route path="/network" element={<Network />} ></Route>
          <Route path="/notification" element={<Notification />} ></Route>
          <Route path="/message" element={<Message />} ></Route>
        </Routes>
      </>
       } 
    </div>
  );
}

export default App;
