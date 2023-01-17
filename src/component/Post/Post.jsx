import React, { useState } from 'react';
import "./Post.css";
import { Link } from 'react-router-dom';

const Post = () => {
  const [isActive, setHeartBtn] = useState(false);
  const heartBtn = () => {
    setHeartBtn(isActive => !isActive);
    console.log("heart toggle");
  }

  return (
    <>
      <li className='w-full flex flex-col bg-neutral-800 py-2 text-white post-border'>
        <div className='w-full flex h-12 items-center'>
          <div className='user-img w-8 h-8 rounded-full bg-rose-500 mx-2'></div>
          <Link to="/sub1">
            <p className='text-sm'>이름이에요</p>
            <p className='text-xs'>2023.05.01</p>
          </Link>
        </div>
        <div className='w-full h-52 bg-slate-700'></div>
        <div className='text-lg mx-2 my-1'>
          <p>글제목</p>
        </div>
        <div className='text-sm mx-2 my-1'>
          <p>글내용입니다. 글내용이에오. aohfphe fioivs sdoijslke cmzxlviohjafsd</p>
        </div>
        <div className='w-full flex justify-between  mt-4'>
          <div className='flex mx-2'>
            <div className={isActive ? "heart-on mr-1" : "heart mr-1"} onClick={() => heartBtn()}></div>
            <div id='heartCnt' className='mr-4'>1</div>
            <div className='mr-1 comment'></div>
            <div>3</div>
          </div>
          <div className='mx-2'>공유</div>
        </div>
      </li>
    </>
  )
}

export default Post;