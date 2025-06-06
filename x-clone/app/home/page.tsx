"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Search_input from '@/components/Search_input';
import { usePathname } from 'next/navigation';
import { Check, Globe, User, ShieldCheck, AtSign } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Whats_Happening from '@/components/Whats_Happening';
import Who_to_follow from '@/components/Who_to_follow'
import Footer from '@/components/Footer';
import Image from 'next/image'


const Page = () => {

  const search_ref = useRef<HTMLInputElement>(null)

  // URL based sidebar boldnesss logic
  const pathname = usePathname();
  const PageURL = pathname.split('/').filter(Boolean).pop();
  console.log(PageURL)

  // Home Page Input Logic
  const [input, setInput] = useState(false);
  const [centersearchValue, setCentersearchValue] = useState("");
  const handleCenterSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCentersearchValue(value);
  };

  useEffect(() => {
    setInput(false)
  }, []);

  const handleInputPost = () => {
    setInput(true)
  };

  // Center Topbar Selection Logic
  const [bottom_line, setBottom_line] = useState(true);
  const handleTopbarSelection = (e: boolean) => {
    if (e) {
      setBottom_line(true)
    }
    else {
      setBottom_line(false)
    }
  }

  // Dropdown selection state moved here
  const [selected, setSelected] = useState("Everyone");

  return (
    <>
      <div className="main h-[100vh]">
        <div className="center ">
          <div className=" hero-top  topbar border-b-1 border-b-[#2F3336] flex items-center justify-center ">
            <div className='hover fl cursor-pointer  relative text-lg' onClick={() => { handleTopbarSelection(true) }}>
              For You
              {
                bottom_line && <span className="bottom-line w-20  ">
                </span>
              }
            </div>
            <div className='hover fl cursor-pointer relative text-lg' onClick={() => { handleTopbarSelection(false) }}>
              Following
              {
                !bottom_line && <span className="bottom-line w-20  ">
                </span>
              }
            </div>
          </div>
          <div className={`posting pr-4  border-b-1 border-b-[#2F3336] ${input ? "h-40" : "h-30"} `}>
            <div className='flex items-center gap-5 m-5' >
              <Image height={45} width={45} src="/icons/user.png" alt="logo" className="h-[45px] rounded-4xl" />
              <input
                onClick={handleInputPost}
                value={centersearchValue}
                ref={search_ref}
                onChange={(e) => { handleCenterSearch(e) }}
                type="text" placeholder="What's Happening?"
                className='outline-none focus:border-none focus:outline-none placeholder:text-xl text-xl' />

            </div>

            {input && <div className="onclick-input pb-3 border-b-1 border-b-[#1d1f21] !cursor-pointer flex text-[16px] gap-2 ml-20 relative bottom-4">

              <Image height={30} width={30} src="/icons/global-icon.svg" alt="global" className='h-[22px]' />
              <div className='text-[#1d9bf0]   '>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer text-[#1d9bf0]">
                    {selected} can Reply
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="dropdown bg-black text-white w-84 p-2 rounded-xl shadow-lg border-none">
                    <DropdownMenuLabel className="text-white font-bold text-xl">
                      Who can reply?
                      <div className="text-gray-400 text-sm font-normal">
                        Choose who can reply to this post. Anyone mentioned can always reply.
                      </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator className="bg-gray-700" />

                    {[
                      { label: "Everyone", icon: <Globe size={18} className='text-white' />, value: "Everyone" },
                      { label: "Accounts you follow", icon: <User size={18} className='text-white' />, value: "Accounts you follow" },
                      { label: "Verified accounts", icon: <ShieldCheck size={18} className='text-white' />, value: "Verified accounts" },
                      { label: "Only accounts you mention", icon: <AtSign size={18} className='text-white' />, value: "Only accounts you mention" },
                    ].map((item) => (
                      <DropdownMenuItem
                        key={item.value}
                        className="flex items-center gap-3 py-2 px-2 cursor-pointer transition-colors duration-100 hover:!bg-gray-800 hover:!text-white rounded-md"
                        onClick={() => setSelected(item.value)}
                      >
                        <div className="bg-[#1d9bf0] p-2 rounded-full text-white">
                          {item.icon}
                        </div>
                        <span className="flex-1">{item.label}</span>
                        {selected === item.value && <Check size={18} />}
                      </DropdownMenuItem>

                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>


              </div>
            </div>}
            <div className='options flex items-center justify-start  pl-25 gap-2 relative'>
              <Image height={36} width={36} className='option-image' src="/icons/input/media.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/gif.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/grok.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/poll.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/emoji.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/schedule.svg" alt="pic" />
              <Image height={36} width={36} className='option-image' src="/icons/input/location.svg" alt="pic" />

              <span className={` rounded-4xl text-black w-20 fl absolute cursor-pointer text-[16px] h-10 font-[600] right-0 ${centersearchValue ? "bg-[#eff3f4] cursor-pointer button-hover" : "bg-[#787a7a] !cursor-not-allowed"}`}>Post</span>
            </div>
          </div>
          <div className="posts">
            posts
          </div>
        </div>
        <div className="right p-4">
          <Search_input />
          <div className="premium-section mt-5 p-2 ps-5  h-[170px] w-full border border-[#2F3336] rounded-[12px] flex-col items-center justify-center">
            <div className='xl:text-xl lg:text-lg font-bold mb-4'>Subscribe to Premium</div>
            <div className='text-[#d2d3d4] xl:mb-4 lg:mb-2 lg:text-sm md:text-xs '>Subscribe to unlock new features and if eligible, receive a share of revenue.</div>
            <button className='font-bold text-lg md:text-sm bg-[#1d9bf0] rounded-4xl flex items-center justify-center h-8 xl:w-25 md:w-20  '>
              <Link href={"/premium_sign_up"}>Subscribe</Link>
            </button>
          </div>
          <Whats_Happening />
          <Who_to_follow />
          <Footer/>
        </div>
      </div>
    </>

  )
}

export default Page

