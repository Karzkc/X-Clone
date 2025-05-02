"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const page = () => {
  const [input, setInput] = useState(false)
  const [searchCancel, setSearchCancel] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [search_popup, setSearch_popup] = useState(false)

  const search_ref = useRef<HTMLInputElement>(null)


  useEffect(() => {
    setInput(false)
  }, [])

  const handleInputPost = () => {
    setInput(true)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchCancel(value.length > 0);

  };

  const handleCancel = () => {
    setSearchValue("")
    if (search_ref.current) {
      search_ref.current.focus();
    }
    setSearchCancel(false)
  }

  const searchPopupAppear = (e: boolean) => {
    setSearch_popup(e)

  }

  return (
    <>
      <div className="container flex w-[70vw] h-[100vh]">
        <div className="center container  w-[60%] ">
          <div className="topbar border-b-1 border-b-[#1d1f21] flex items-center justify-center ">
            <div className=' fl text-lg'>
              For You
            </div>
            <div className=' fl text-lg'>
              Following
            </div>
          </div>
          <div className="posting pr-4  border-b-1 border-b-[#1d1f21] h-35 ">
            <div className='flex items-center gap-5 m-5' >
              <img src="/icons/user.png" alt="logo" className="h-[45px] rounded-4xl" />
              <input onClick={handleInputPost} type="text" placeholder="What's Happening?" className='outline-none focus:border-none focus:outline-none placeholder:text-xl text-xl' />

            </div>

            {input && <div className="onclick-input pb-3 border-b-1 border-b-[#1d1f21] !cursor-pointer flex text-[16px] gap-2 ml-20 relative bottom-4">

              <img src="/icons/global-icon.svg" alt="global" className='h-[22px]' />
              <div className='text-[#1d9bf0]   '>
                <DropdownMenu >
                  <DropdownMenuTrigger>
                    <span className="!cursor-pointer"> Everyone can Reply</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      <span className='text-sm '>Who can reply?</span> <br />
                      <span className='text-[12px] text-gray-600'>Choose who can reply to this post. Anyone mentioned can always reply.</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Everyone</DropdownMenuItem>
                    <DropdownMenuItem>Accounts you follow</DropdownMenuItem>
                    <DropdownMenuItem>Verified accounts</DropdownMenuItem>
                    <DropdownMenuItem>Only accounts you mention</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            </div>}
            <div className='options'>

            </div>
          </div>
          <div className="posts">
            posts
          </div>
        </div>
        <div className="right container border w-[40%] p-4">
          <div className='flex items-center search-input rounded-4xl border-2 pr-2 border-[#1d1f21] focus-within:border-[#1d9bf0]'>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              ref={search_ref}
              className="caret-[#1d9bf0] outline-none h-max w-full p-2 pl-10 placeholder:text-white"
              onChange={(e) => { handleSearch(e) }}
              onFocus={() => searchPopupAppear(true)}
              onBlur={() => searchPopupAppear(false)}
            />
            {searchCancel && <span className='cursor-pointer' onClick={handleCancel}>
              <img src="/icons/cross.svg" alt="cancel" className='h-6' />
            </span>}
          </div>
          {search_popup && <div className="search-popup bg-black min-h-[100px] flex justify-center items-start rounded-[8px] ">
            <span className='text-[#666a6f] text-[17px] mt-5'> Try searching for people, lists, or keywords </span>
          </div>}
          <div className="premium-section mt-5 p-2 ps-5  h-[170px] w-full border border-[#1d1f21] rounded-[12px] flex-col items-center justify-center">
            <div className='text-xl font-bold mb-4'>Subscribe to Premium</div>
            <div className='text-[#d2d3d4]  mb-4'>Subscribe to unlock new features and if eligible, receive a share of revenue.</div>
            <button className='font-bold text-lg bg-[#1d9bf0] rounded-4xl flex items-center justify-center h-10 w-30 '>
            <Link href={"/premium_sign_up"}>Subscribe</Link>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default page

