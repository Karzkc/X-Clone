"use client"
import Footer from '@/components/Footer'
import Search_input from '@/components/Search_input'
import Whats_Happening from '@/components/Whats_Happening'
import Who_to_follow from '@/components/Who_to_follow'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

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
      acc[Number(key) as 1 | 2 | 3 | 4 | 5] = key === selectedKey;
      return acc;
    }, {} as { 1: boolean; 2: boolean; 3: boolean; 4: boolean; 5: boolean });

    setBottom_line(updated);

  };
  return (
    <>
      <div className="main flex ">

        <div className="center relative top-0">
          <div className='hero-top'>
            <div className="top flex items-start justify-center gap-12">
              <div className='mt-3 w-[85%] '>
                <Search_input />
              </div>
              <div className="settings  ">
                <Image  height={36} width={36} src="/icons/settings.svg" alt="pic" className= 'option-image settings-image relative top-4 cursor-pointer' />
              </div>
            </div>
            <div className="topbar flex items-center justify-start mt-2 overflow-y-auto  ">

              <div className={`top-options  hover ${bottom_line[1] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("1") }}>
                For You
                {
                  bottom_line[1] && <span className="bottom-line w-15   ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[2] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("2") }}>
                Trending
                {
                  bottom_line[2] && <span className="bottom-line w-15  ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[3] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("3") }}>
                News
                {
                  bottom_line[3] && <span className="bottom-line w-15  ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[4] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("4") }}>
                Sports
                {
                  bottom_line[4] && <span className="bottom-line w-15  ">
                  </span>
                }
              </div>


              <div className={`top-options hover ${bottom_line[5] ? "!text-white" : "!text-[#71767b]"}   `} onClick={() => { handleTopbarSelection("5") }}>
                Entertainment
                {
                  bottom_line[5] && <span className="bottom-line w-15 ">
                  </span>
                }
              </div>

            </div>
          </div>
          <div className="center-content">
                <Who_to_follow/>
                <Whats_Happening />
          </div>
        </div>
        <div className="right p-4 border-l border-l-[#1d1f21]">
          <Who_to_follow />
          <Whats_Happening />
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Page
