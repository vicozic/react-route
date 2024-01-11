import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Navbar from '../Navbar/Navbar'
import Nest from './Nests/Nest'
import Error from './Components/Error'
import One from './Nests/One'
import Two from './Nests/Two'
import Three from './Nests/Three'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/nest' element={<Nest/>}>
        <Route index element={<One/>}/>
        <Route path='two' element={<Two/>}/>
        <Route path='three' element={<Three/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App