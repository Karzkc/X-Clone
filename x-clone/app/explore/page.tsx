"use client"
import Search_input from '@/components/Search_input'
import React, { useState } from 'react'

const page = () => {
  // Center Topbar Selection Logic
  const [bottom_line, setBottom_line] = useState(1);
  const handleTopbarSelection = (e: number) => {
    switch (e) {
      case 0:
        setBottom_line(1)
        break;
      case 2:
        setBottom_line(2)
        break;
      case 3:
        setBottom_line(3)
        break;
      case 4:
        setBottom_line(4)
        break;
      case 5:
        setBottom_line(5)
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div className="flex w-[70vw] h-[100vh] ">

        <div className="center  w-[60%]   relative top-0">
          <div className="top flex items-start justify-center gap-12">
            <div className='mt-3 w-[85%] '>
              <Search_input />
            </div>
            <div className="settings options ">
              <img src="/icons/settings.svg" alt="pic" className='relative top-4 cursor-pointer' />
            </div>
          </div>
          <div className="topbar fl mt-2 relative">
            <div onClick={() => { handleTopbarSelection(1) }}>
              For You</div>
            {
              bottom_line && <span className="bottom-line  ">
              </span>
            }
            <div onClick={() => { handleTopbarSelection(2) }}>
              Trending</div>
            {
              bottom_line && <span className="bottom-line  ">
              </span>
            }
            <div onClick={() => { handleTopbarSelection(3) }}>
              News</div>
            {
              bottom_line && <span className="bottom-line  ">
              </span>
            }
            <div onClick={() => { handleTopbarSelection(4) }}>
              Sports </div>
            {
              bottom_line && <span className="bottom-line  ">
              </span>
            }
            <div onClick={() => { handleTopbarSelection(5) }}>
              Entertainment </div>
            {
              bottom_line && <span className="bottom-line  ">
              </span>
            }</div>
        </div>
        <div className="right w-[40%] p-4 border-l border-l-[#1d1f21]">
          right
        </div>
      </div>
    </>
  )
}

export default page
