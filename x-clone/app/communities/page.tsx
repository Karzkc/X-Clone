"use client"
import Footer from '@/components/Footer'
import Search_input from '@/components/Search_input'
import Whats_Happening from '@/components/Whats_Happening'
import Who_to_follow from '@/components/Who_to_follow'
import Link from 'next/link'

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
    }, {} as { 1: boolean; 2: boolean; 3: boolean; });

    setBottom_line(updated);

  };
  return (
    <>
      <div className="main flex ">

        <div className="center relative top-0">
          <div className="cursor-pointer border-b-1 border-b-[#2f3336] hero-top flex items-center justify-between h-15 p-5">
            <div className='comm-left  fl gap-6 '>
              <Link href="/home">
                <span className='hover:bg-[#EFF3F419] ease-in-out duration-150 rounded-4xl h-9 w-9 fl '>
                  <img src="/icons/back.svg" alt="back" className='h-5' />
                </span>
              </Link>
              <div className="text-xl font-[600]">
                Communities
              </div>
            </div>
            <div className="comm-icons fl gap-1 options">
              <div className='fl'>
                <img src="/icons/search.svg" alt="search" className='!h-8' />
              </div>
              <div className='fl'>
                <img src="/icons/get-verified.svg" alt="search" className='!h-8' />
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
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page
