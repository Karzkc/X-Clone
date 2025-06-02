"use client"
import Footer from '@/components/Footer'
import Search_input from '@/components/Search_input'
import Whats_Happening from '@/components/Whats_Happening'
import Who_to_follow from '@/components/Who_to_follow'

import React, { useState } from 'react'

const page = () => {

  // Center Topbar Selection Logic
  const [bottom_line, setBottom_line] = useState({
    1: true,
    2: false,
    3: false,

  });
  const handleTopbarSelection = (selectedKey: string) => {
    const updated = Object.keys(bottom_line).reduce((acc, key) => {
      acc[Number(key) as 1 | 2 | 3] = key === selectedKey;
      return acc;
    }, {} as { 1: boolean; 2: boolean; 3: boolean;});

    setBottom_line(updated);

  };
  return (
    <>
      <div className="main flex ">

        <div className="center relative top-0">
          <div className='hero-top cursor-pointer'>
            <div className="top flex items-center justify-between  ">
              <div className=' text-xl font-[600] '>
                Notifications
              </div>
              <div className="settings options">
                <img src="/icons/settings.svg" alt="pic" className='relative cursor-pointer' />
              </div>
            </div>
            <div className="topbar fl mt-2 relative">

              <div className={`top-options hover ${bottom_line[1] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("1") }}>
                All
                {
                  bottom_line[1] && <span className="bottom-line w-15   ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[2] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("2") }}>
                Verified
                {
                  bottom_line[2] && <span className="bottom-line w-15  ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[3] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("3") }}>
                Mentions
                {
                  bottom_line[3] && <span className="bottom-line w-15  ">
                  </span>
                }
              </div>


            </div>
          </div>
          <div className="center-content">
                
          </div>
        </div>
        <div className="right p-4 border-l border-l-[#1d1f21]">
          <Search_input />
          <Whats_Happening />
          <Who_to_follow />
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default page
