import React from 'react'
import './topbar.css'
import { LuSearch } from 'react-icons/lu'
import { RxDotFilled } from 'react-icons/rx'
import owner from '../../assests/owner.jpg'

export default function Topbar() {
    return (
        <div className='top-bar'>
          <h1 className='appname'>MySocials</h1>
          <div className="middle">

            <input type="search" name="" id="search-top-bar" placeholder='Search for profiles, posts, pages and more...' />
            <LuSearch className='search-icon' />
          </div>
          <div className="right">
            <h4 id='golive'>Go Live <RxDotFilled /> </h4>
            <img src={owner} alt="" height={60} width={60} />
          </div>
        </div>
      )
}
