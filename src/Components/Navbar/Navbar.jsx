import React from 'react'
import {useCurrentDate} from '../../Hook/useCurrentDate'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='layoutNavbar'>
        <div className='projectInfo'>
            <h3 className='fileName' contentEditable="true" suppressContentEditableWarning={true}>FileName</h3>
            <p className='createAt'>Create At : {useCurrentDate()}</p>
        </div>
        <div className='otherOption'>
            <button className='saveBtn'>Save</button>
        </div>
    </nav>
  )
}

export default Navbar