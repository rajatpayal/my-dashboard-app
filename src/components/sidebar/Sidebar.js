import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
      <div className="row">
        <div className="sidebar col-2 text__primary">
            <div className='text-center'>
                <h3>Rajat payal</h3>
                <p>Frontend Developer Web Developer</p>
            </div>
            <ul className='side__links p-4 list-unstyled'>
              <li className='bg__blue rounded-2'>Dashboard</li>
              <li className='rounded-2'>Attendence</li>
              <li className='rounded-2'>Time Tracker</li>
              <li className='rounded-2'>Leave</li>
              <li className='rounded-2'>Holiday</li>
              <li className='rounded-2'>Change Password</li>
              <li className='rounded-2'>LogOut</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
