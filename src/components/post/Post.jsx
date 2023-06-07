import React, { useState } from 'react'
import './post.css'
import owner from '../../assests/owner.jpg'
import { RxDotsVertical } from 'react-icons/rx'
import up from '../../assests/up.png'
import down from '../../assests/down.png'
import tech from '../../assests/tech.jpg'
import tech1 from '../../assests/tech1.gif'
import tech2 from '../../assests/tech2.jpg'
import tech3 from '../../assests/tech3.png'
import tech4 from '../../assests/tech4.jpg'
import fri1 from '../../assests/fri1.webp'
import fri5 from '../../assests/fri5.jpg'
import female from '../../assests/female.jpg'

export default function Post() {
  const [likeNum, setLike] = useState(67);
  const [dislikeNum, setDislike] = useState(4);
  const [active, setActive] = useState("none");

  const likeHandler = () => {
    if (active === "none") {
      setLike(likeNum + 1);
      setActive("like");
      return;
    }

    if (active === "like") {
      setLike(likeNum - 1);
      setActive("none");
      return;
    }

    if (active === "dislike") {
      setLike(likeNum + 1);
      setActive("like");
      return;
    }
  };

  const dislikeHandler = () => {
    if (active === "none") {
      setDislike(dislikeNum + 1);
      setActive("dislike");
      return;
    }

    if (active === "dislike") {
      setDislike(dislikeNum - 1);
      setActive("none");
      return;
    }

    if (active === "like") {
      setDislike(dislikeNum + 1);
      setActive("dislike");
      return;
    }
  };

  return (
    <div>
      <div className='post'>
        <div className="card">
          <div className="card-top">
            <img src={owner} alt="" />
            <h3>Humera Jabeen</h3>
            <h5>5 mins ago</h5>
            <RxDotsVertical className='card-top-dot' />
          </div>
          <p>Hello! This is my first post on MySocials.</p>
          <img src={tech1} alt="" />
          <div className="reactions">

            <button id='btn-container'
              className={`btn ${active === "like" ? "like-active" : ""}`}
              onClick={likeHandler}>
              <p id='likes'><img src={up} id='up' alt="" />{likeNum}</p>
            </button>

            <button id='btn-container'
              className={`btn ${active === "dislike" ? "dislike-active" : ""}`}
              onClick={dislikeHandler}>
              <p id='dislikes'><img src={down} id='down' alt="" />{dislikeNum}</p>
            </button>

            <p className='comments'>View all comments</p>
          </div>
        </div>
      </div>
      <div className='post'>
        <div className="card">
          <div className="card-top">
            <img src={fri1} alt="" />
            <h3>Jessica Cara</h3>
            <h5>37 mins ago</h5>
            <RxDotsVertical className='card-top-dot' />
          </div>
          <p>Happiness held is the seed; Happiness shared is the flower.</p>
          <img src={tech3} alt="" />
          <div className="reactions">

            <button id='btn-container'
              className={`btn ${active === "like" ? "like-active" : ""}`}
              onClick={likeHandler}>
              <p id='likes'><img src={up} id='up' alt="" />{likeNum}</p>
            </button>

            <button id='btn-container'
              className={`btn ${active === "dislike" ? "dislike-active" : ""}`}
              onClick={dislikeHandler}>
              <p id='dislikes'><img src={down} id='down' alt="" />{dislikeNum}</p>
            </button>

            <p className='comments'>View all comments</p>
          </div>
        </div>
      </div>
      <div className='post'>
        <div className="card">
          <div className="card-top">
            <img src={female} alt="" />
            <h3>Perin Esinia</h3>
            <h5>58 mins ago</h5>
            <RxDotsVertical className='card-top-dot' />
          </div>
          <p>Make sure you watch more sunsets than Netflix.</p>
          <img src={tech2} alt="" />
          <div className="reactions">

            <button id='btn-container'
              className={`btn ${active === "like" ? "like-active" : ""}`}
              onClick={likeHandler}>
              <p id='likes'><img src={up} id='up' alt="" />{likeNum}</p>
            </button>

            <button id='btn-container'
              className={`btn ${active === "dislike" ? "dislike-active" : ""}`}
              onClick={dislikeHandler}>
              <p id='dislikes'><img src={down} id='down' alt="" />{dislikeNum}</p>
            </button>

            <p className='comments'>View all comments</p>
          </div>
        </div>
      </div>
      <div className='post'>
        <div className="card">
          <div className="card-top">
            <img src={fri5} alt="" />
            <h3>Arezou Nisha</h3>
            <h5>22 hours ago</h5>
            <RxDotsVertical className='card-top-dot' />
          </div>
          <p>When life gives you lemons, keep them, cause hey — free lemons</p>
          <img src={tech4} alt="" />
          <div className="reactions">

            <button id='btn-container'
              className={`btn ${active === "like" ? "like-active" : ""}`}
              onClick={likeHandler}>
              <p id='likes'><img src={up} id='up' alt="" />{likeNum}</p>
            </button>

            <button id='btn-container'
              className={`btn ${active === "dislike" ? "dislike-active" : ""}`}
              onClick={dislikeHandler}>
              <p id='dislikes'><img src={down} id='down' alt="" />{dislikeNum}</p>
            </button>

            <p className='comments'>View all comments</p>
          </div>
        </div>
      </div>
      <div className='post'>
        <div className="card">
          <div className="card-top">
          <img src={fri1} alt="" />
            <h3>Jessica Cara</h3>
            <h5>1 day ago</h5>
            <RxDotsVertical className='card-top-dot' />
          </div>
          <p>Technology is best when it brings people together.</p>
          <img src={tech} alt="" />
          <div className="reactions">

            <button id='btn-container'
              className={`btn ${active === "like" ? "like-active" : ""}`}
              onClick={likeHandler}>
              <p id='likes'><img src={up} id='up' alt="" />{likeNum}</p>
            </button>

            <button id='btn-container'
              className={`btn ${active === "dislike" ? "dislike-active" : ""}`}
              onClick={dislikeHandler}>
              <p id='dislikes'><img src={down} id='down' alt="" />{dislikeNum}</p>
            </button>

            <p className='comments'>View all comments</p>
          </div>
        </div>
      </div>
    </div>
  )
}