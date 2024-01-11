import React, { useRef } from 'react'
import "./components.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  //Transfer data to another route by using useNavigate and useLocation
  const navigate = useNavigate();
  const inputRef = useRef();
  const sendNameClick = () => {
    const name = inputRef.current.value;
    // console.log(name);
    navigate("service",{state:{text:name}})
  }
  return (
    <div className='container'> 
    <input type="text"  ref={inputRef}/>
    <button onClick={sendNameClick}>Send</button>
    <br />
    Home
    </div>
  )
}

export default Home