import React from 'react';
import "./Home.css";
import Post from "../../component/Post/Post";

const Home = () => {
  return (
    <div className='h-screen flex-col bg-neutral-800'>
      <ul className='mx-4'>
        <Post></Post>
      </ul>
    </div>
  )
}

export default Home;