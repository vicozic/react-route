import React from 'react'
import "./components.css"
import {ArrowLeft} from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/service");
    navigate(-1);
  }

  return (
<>
<button onClick={handleClick}> 
    <ArrowLeft/>

    </button>
    <div className='container'>
    
    Contact</div>
    </>
  )
}

export default Contact