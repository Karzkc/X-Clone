"use client"
import Search_input from '@/components/Search_input'
import React, { useState } from 'react'

const page = () => {
  
  // Center Topbar Selection Logic
  const [bottom_line, setBottom_line] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const handleTopbarSelection = (selectedKey: string) => {
    const updated = Object.keys(bottom_line).reduce((acc, key) => {
      acc[key] = key === selectedKey;
      return acc;
    }, {} as Record<string, boolean>);

    setBottom_line(updated);

  };
  return (
    <>
      <div className="main flex  h-[100vh] ">

        <div className="center relative top-0">
          <div className="top flex items-start justify-center gap-12">
            <div className='mt-3 w-[85%] '>
              <Search_input />
            </div>
            <div className="settings options ">
              <img src="/icons/settings.svg" alt="pic" className='relative top-4 cursor-pointer' />
            </div>
          </div>
          <div className="topbar fl mt-2 relative">

            <div className={`top-options ${bottom_line[1] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("1") }}>
              For You
              {
                bottom_line[1] && <span className="bottom-line   ">
                </span>
              }
            </div>


            <div className={`top-options ${bottom_line[2] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("2") }}>
              Trending
              {
                bottom_line[2] && <span className="bottom-line  ">
                </span>
              }
            </div>


            <div className={`top-options ${bottom_line[3] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("3") }}>
              News
              {
                bottom_line[3] && <span className="bottom-line  ">
                </span>
              }
            </div>


            <div className={`top-options ${bottom_line[4] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("4") }}>
              Sports
              {
                bottom_line[4] && <span className="bottom-line  ">
                </span>
              }
            </div>


            <div className={`top-options ${bottom_line[5] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("5") }}>
              Entertainment
              {
                bottom_line[5] && <span className="bottom-line ">
                </span>
              }
            </div>

          </div>
        </div>
        <div className="right p-4 border-l border-l-[#1d1f21]">
          right
        </div>
      </div>
    </>
  )
}

export default page
