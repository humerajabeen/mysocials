import React from 'react'
import './rightbar.css'
import man from '../../assests/man.jpg'
import female from '../../assests/female.jpg'
import gift from '../../assests/gift.webp'
import fri1 from '../../assests/fri1.webp'
import fri2 from '../../assests/fri2.png'
import fri3 from '../../assests/fri3.jpg'
import fri4 from '../../assests/fri4.webp'
import fri5 from '../../assests/fri5.jpg'
import fri6 from '../../assests/fri6.jpg'
import { MDBInput, MDBCol } from "mdbreact";


const rightbar = () => {
  return (
    <div className='rightbar-box'>
      <div className='rightbar'>
        <div className="card-rightbar">
          <div className="card-rightbar-name">
            <img src={man} alt="" />
            <p><b>Zekiye Dilan</b> wants to add you as a friend.</p>
          </div>
          <div className="btn">
            <button id='btn1'>Accept</button>
            <button id='btn2'>Ignore</button>
          </div>
        </div>
        <br />
        <div className="card-rightbar">
          <div className="card-rightbar-name">
            <img src={female} alt="" />
            <p><b>Perin Esinia</b> wants to add you as a friend.</p>
          </div>
          <div className="btn">
            <button id='btn1'>Accept</button>
            <button id='btn2'>Ignore</button>
          </div>
        </div>
      </div>
      <div className="bday">
        <img src={gift} alt="" width={60} height={60} />
        <p><b>Jax Lena</b> and <b>3 others</b> are celebrating their birthdays today.</p>
      </div>
      <div className="rightbar-online">
        <div className="tops">
        <h3>Online Friends</h3>
        <MDBCol md="6">
          <MDBInput className='search' hint="Search" type="text" containerClass="mt-0" />
        </MDBCol>
        </div>
        <div className="dp">
          <img src={fri1} alt="" />
          <p className='names'>Jessica Cara</p>
          <span className='online-dot'></span>
        </div>
        <div className="dp">
          <img src={fri3} alt="" />
          <p className='names'>Dara Vester</p>
          <span className='online-dot'></span>
        </div>
        <div className="dp">
          <img src={fri2} alt="" />
          <p className='names'>Anushka Vasuda</p>
          <span className='online-dot'></span>
        </div>
        <div className="dp">
          <img src={fri5} alt="" />
          <p className='names'>Arezou Nisha</p>
          <span className='online-dot'></span>
        </div>
        <div className="dp">
          <img src={fri4} alt="" />
          <p className='names'>Taher Jeong</p>
          <span className='online-dot'></span>
        </div>
        <div className="dp">
          <img src={fri6} alt="" />
          <p className='names'>Hella Aref</p>
          <span className='online-dot'></span>
        </div>
      </div>
    </div>
  )
}

export default rightbar