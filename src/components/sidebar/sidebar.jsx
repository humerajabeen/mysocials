import React from 'react'
import './sidebar.css'
import { MdRssFeed, MdChat, MdPhotoSizeSelectActual, MdVideoStable, MdEventNote, MdMusicNote, MdGroups2, MdOutlineQuestionMark } from 'react-icons/md'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import robo from '../../assests/robo.webp'
import robo1 from '../../assests/robo1.jpg'
import robo2 from '../../assests/robo2.jpg'
import robo3 from '../../assests/robo3.jpg'
import robo4 from '../../assests/robo4.jpg'
import robo5 from '../../assests/robo5.jpg'


const sidebar = () => {
  return (
    <div className='sidebar1'>
      <ul>
        <li className='list'><MdRssFeed className='logo-list' /><p>Feed</p></li>
        <li className='list'><MdChat className='logo-list' /><p>Chats</p></li>
        <li className='list'><MdPhotoSizeSelectActual className='logo-list' /><p>Photos</p></li>
        <li className='list'><MdVideoStable className='logo-list' /><p>Videos</p></li>
        <li className='list'><MdEventNote className='logo-list' /><p>Events</p></li>
        <li className='list'><MdMusicNote className='logo-list' /><p>Music</p></li>
        <li className='list'><MdGroups2 className='logo-list' /><p>Groups</p></li>
        <li className='list'><MdOutlineQuestionMark className='logo-list' /><p>Questions</p></li>
        <button className='button'>Show more</button>
      </ul>
      <hr width={260} />
      <h3 id='community'>Communities</h3>
      <div className="friends">
        <img src={robo4} alt="" height={60} width={60} />
        <p id='name'>Ora Huey</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
      <div className="friends">
        <img src={robo1} alt="" height={60} width={60} />
        <p id='name'>Poghos Meri</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
      <div className="friends">
        <img src={robo2} alt="" height={60} width={60} />
        <p id='name'>Nare Ararat</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
      <div className="friends">
        <img src={robo3} alt="" height={60} width={60} />
        <p id='name'>Jax Lena</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
      <div className="friends">
        <img src={robo} alt="" height={60} width={60} />
        <p id='name'>Rudolf Levon</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
      <div className="friends">
        <img src={robo5} alt="" height={60} width={60} />
        <p id='name'>Joetta Mimi</p><AiOutlineUsergroupAdd className='add'/>
        <div className="hide">Join</div>
      </div>
    </div>
  )
}

export default sidebar