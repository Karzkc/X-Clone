import React from 'react'

const page = () => {
  return (
    <>
      <div className="container flex w-[70vw] h-[100vh]">
        <div className="center container  border w-[60%] ">
          <div className="topbar border-b-1 border-b-[#1d1f21] flex items-center justify-center ">
            <div className=' fl text-lg'>
              For You
            </div>
            <div className=' fl text-lg'>
              Following
            </div>
          </div>
          <div className="posting  border-b-1 border-b-[#1d1f21] h-35">
            <div className='flex items-center gap-5 m-5' >
            <img src="/icons/user.png" alt="logo" className="h-[45px] rounded-4xl" />
            <input type="text" placeholder="What's Happening?" className='outline-none focus:border-none focus:outline-none placeholder:text-xl text-xl' />
            </div>
            <div className='options'>
              
            </div>
          </div>
          <div className="posts">
            posts
          </div>
        </div>
        <div className="right container border w-[40%]">
          right section
        </div>
      </div>
    </>

  )
}

export default page
