import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/sidebar'
import Post from './components/post/Post'
import Rightbar from './components/rightbar/rightbar'

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className='middle-body'>
    <Sidebar/>
    <Post/>
    <Rightbar/>
    </div>
    </>
  )
}