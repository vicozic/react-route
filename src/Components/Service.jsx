import React from 'react'
import "./components.css"
import { useLocation } from 'react-router-dom'

const Service = () => {
  const location = useLocation();
  // const text = location.state.text;
  return (
    <div className='container'>
    <p>{location.state? location.state.text: null}</p>
    <h1>Service</h1>
    </div>
  )
}

export default Service