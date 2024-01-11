import React from 'react'
import "../Components/components.css"


import { Link ,Outlet} from 'react-router-dom'
const Nest = () => {
  return (
    <div className='nest-container'>
        <ul>
            <li>
              <Link to='/nest/one'>One</Link>
            </li>
            <li>
            <Link to='/nest/two'>Two </Link>

            </li>
            <li>
            <Link to='/nest/three'>Three</Link>

            </li>
        </ul>
        <div className='nest-output'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Nest