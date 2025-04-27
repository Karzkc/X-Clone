"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleExpandation = () => {
            if (window.innerWidth < 1260) {
                setExpanded(false);
            } else {
                setExpanded(true);
            }
        };

        handleExpandation();
        window.addEventListener('resize', handleExpandation);

        return () => {
            window.removeEventListener('resize', handleExpandation);
        };
    }, []);



    return (
        <>

            <div className='sidebar sm:ps-18 ps-5  pt-2 pb-8 border-r-2 border-r-[#1d1f21]   h-screen absolute left-0 flex flex-col justify-between items-center gap-0'>

                <div className="logo items">
                    <Link href={"/home"}>

                        <span className=' !pr-3'>
                            <div className="icon">
                                <img src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                            </div>
                        </span>
                    </Link>
                </div>
                <div className="home items">
                    <Link href={"/home"}>

                        <span>
                            <div className="icon">
                                <img src="/icons/home.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Home </div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="search items">
                    <Link href={"/explore"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/search.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Explore</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="notifications items">
                    <Link href={"/notifications"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/notif.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Notifications</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="messages items">
                    <Link href={"/messages"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/msg.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Messages</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="grok items">
                    <Link href={"/grok"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/grok.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Grok</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="communities items">
                    <Link href={"/communities"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/communities.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Communities</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="premium items">
                    <Link href={"/premium_sign_up"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Premium</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="profile items">
                    <Link href={"/username"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/profile.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Profile</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="more items">
                    <Link href={"#"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/more.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">More</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="post">
                    <Link href={"#"}>

                        <span>

                            {!expanded && <div className="icon">
                                <img src="/icons/post.svg" alt="logo" className="h-[30px]" />
                            </div>}
                            {expanded &&

                                <div className="title border rounded-4xl text-xl !w-60 h-14 flex justify-center items-center text-gray-800 font-bold bg-white">Post</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="profile-icon items">
                    <Link href={"#"}>

                        <span>

                            <div className="icon">
                                <img src="/icons/user.png" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-xl">Username</div>
                            }
                        </span>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .sidebar {
                    width: ${expanded ? '360px' : '160px'};
                }
            `}</style>
        </>
    )
}

export default Sidebar
