import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen){
    return null;
  }
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
          <li className='font-medium p-1'><Link to="/">Home</Link></li>
          <li className='font-medium p-1'> Shorts</li>
          <li className='font-medium p-1'> Videos</li>
          <li className='font-medium p-1'> Music</li>
        </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li  className=' p-1' >Live</li>
        <li className=' p-1'>Sports</li>
        <li className=' p-1'>Gaming</li>
        <li className=' p-1'>Movies</li>
      </ul>

      <h1 className='font-bold pt-5 p-1'>You ►</h1>
      <ul>
        <li className=' p-1'> Channel</li>
        <li className=' p-1'>History</li>
        <li className=' p-1'>Watch Later</li>
      </ul>
    </div>
  )
}

export default SideBar