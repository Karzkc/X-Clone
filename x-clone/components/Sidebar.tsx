"use client"
import React, { useEffect, useState } from 'react'



const Sidebar = () => {
    useEffect(() => {
      handleExpandation()
    },)
    
    const [expanded, setExpanded] = useState(true)
    console.log(window.innerWidth);
    const handleExpandation = () => {
      if (window.innerWidth<1260) {
        setExpanded(false)
      }
      else{
        setExpanded(true)
      }
    }
    

    return (
        <div className='ps-18 pt-2 pb-8 border-r-2 border-r-[#1d1f21]   h-screen w-90 absolute left-0 flex flex-col justify-between items-center gap-0'>
            <div className="logo items">
                <span className=' !pr-3'>
                    <div className="icon">
                        <img src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                    </div>
                </span>
            </div>
            <div className="home items">
                <span>
                    <div className="icon">
                        <img src="/icons/home.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Home</div>
                    }
                </span>
            </div>
            <div className="search items">
                <span>

                    <div className="icon">
                        <img src="/icons/search.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Explore</div>
                    }
                </span>
            </div>
            <div className="notifications items">
                <span>

                    <div className="icon">
                        <img src="/icons/notif.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Notifications</div>
                    }
                </span>
            </div>
            <div className="messages items">
                <span>

                    <div className="icon">
                        <img src="/icons/msg.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Messages</div>
                    }
                </span>
            </div>
            <div className="grok items">
                <span>

                    <div className="icon">
                        <img src="/icons/grok.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Grok</div>
                    }
                </span>
            </div>
            <div className="communities items">
                <span>

                    <div className="icon">
                        <img src="/icons/communities.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Communities</div>
                    }
                </span>
            </div>
            <div className="premium items">
                <span>

                    <div className="icon">
                        <img src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Premium</div>
                    }
                </span>
            </div>
            <div className="profile items">
                <span>

                    <div className="icon">
                        <img src="/icons/profile.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Profile</div>
                    }
                </span>
            </div>
            <div className="more items">
                <span>

                    <div className="icon">
                        <img src="/icons/more.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">More</div>
                    }
                </span>
            </div>
            <div className="post">
                <span>

                    {!expanded && <div className="icon">
                        <img src="/icons/post.svg" alt="logo" className="h-[30px]" />
                    </div>}
                    {expanded &&

                        <div className="title border rounded-4xl text-xl !w-60 h-14 flex justify-center items-center text-gray-800 font-bold bg-white">Post</div>
                    }
                </span>
            </div>
            <div className="profile-icon items">
                <span>

                    <div className="icon">
                        <img src="/icons/profile-icon.svg" alt="logo" className="h-[30px]" />
                    </div>
                    {expanded &&

                        <div className="title text-xl">Username</div>
                    }
                </span>
            </div>
        </div>
    )
}

export default Sidebar
