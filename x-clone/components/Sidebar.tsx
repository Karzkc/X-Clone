"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image'

const Sidebar = () => {
    // for sidebar grow and shrink
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleExpandation = () => {
            if (window.innerWidth < 1278) {
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

    // for URL based sidebar option
    const pathname = usePathname();
    useEffect(() => {
        const current = pathname.split('/').filter(Boolean).pop();
        console.log("Current Page:", current);

        document.querySelectorAll('.title').forEach(el => {
            el.classList.remove('!font-[700]', '!text-white');
        });

        document.querySelectorAll('span img').forEach(el => {
            el.classList.remove('!h-[40px]');
        });

        if (current) {
            const titleEl = document.querySelector(`.title.${current}`);
            titleEl?.classList.add('!font-[700]', '!text-white');

            const iconEl = titleEl?.previousElementSibling?.querySelector('span img');
            iconEl?.classList.add('!shadow-2xl', '!shadow-amber-50');
        }
    }, [pathname]);


    return (
        <>

            <div className=' w-full fixed sidebar pt-2 pb-8  h-screen flex flex-col justify-between items-center gap-0'>

                <div className="logo items  ">
                    <Link href={"/home"}>

                        <span className='fl  !p-0 !w-[50px] !h-[50px]'>
                            <div className="icon  ">
                                <Image height={30} width={30} src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                            </div>
                        </span>
                    </Link>
                </div>
                <div className="home items ">
                    <Link href={"/home"}>
                        <span>
                            <div className=" icon">
                                <Image height={30} width={30} src="/icons/home.svg" alt="logo" className="h-[30px] " />
                            </div>
                            {expanded &&
                                <div className="title  home text-[20px] ">Home</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="search items ">
                    <Link href={"/explore"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/search.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title explore text-[20px]">Explore</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="notifications items ">
                    <Link href={"/notifications"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/notif.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title notifications text-[20px]">Notifications</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="messages items ">
                    <Link href={"/messages"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/msg.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title messages text-[20px]">Messages</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="grok items ">
                    <Link href={"#"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/grok.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title grok text-[20px]">Grok</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="communities items ">
                    <Link href={"/communities"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/communities.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title communities text-[20px]">Communities</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="premium items ">
                    <Link href={"/premium_sign_up"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/logo.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title premium_sign_up text-[20px]">Premium</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="profile items ">
                    <Link href={"/username"}>
                        <span>
                            <div className="icon">
                                <Image height={30} width={30} src="/icons/profile.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&
                                <div className="title username text-[20px]">Profile</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="more items ">
                    <Link href={"#"}>

                        <span>

                            <div className="icon">
                                <Image height={30} width={30} src="/icons/more.svg" alt="logo" className="h-[30px]" />
                            </div>
                            {expanded &&

                                <div className="title text-[20px]">More</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="post ">
                    <Link href={"#"}>

                        <span className=''>

                            {!expanded && <div className="icon">
                                <Image height={30} width={30} src="/icons/post.svg" alt="logo" className="h-[30px]" />
                            </div>}
                            {expanded &&

                                <div className="title border rounded-4xl text-[20px] w-[16vw] h-14 flex justify-center items-center text-gray-800 font-bold bg-white">Post</div>
                            }
                        </span>
                    </Link>
                </div>
                <div className="profile-icon items ">
                    <Link href={"/username"}>

                        <span>

                            <div className="icon">
                                <Image height={30} width={30} src="/icons/user.png" alt="logo" className="h-[30px] rounded-4xl" />
                            </div>
                            {expanded &&

                                <div className="title text-[20px]">Karzkc</div>
                            }
                        </span>
                    </Link>
                </div>
            </div>

            <div className="bottombar overflow-hidden  z-10 w-full h-[54px] !bg-black absolute bottom-0 border-t border-t-[#2f3336] fl gap-1 ">
                <div className="home">
                    <Link href={"/home"}>
                        <span>
                            <div className=" icon">
                                <Image height={26} width={26} src="/icons/home.svg" alt="logo" className="h-[26px] " />
                            </div>
                            
                        </span>
                    </Link>
                </div>
                <div className="search">
                    <Link href={"/explore"}>
                        <span>
                            <div className="icon">
                                <Image height={26} width={26} src="/icons/search.svg" alt="logo" className="h-[26px]" />
                            </div>
                            
                        </span>
                    </Link>
                </div>
                <div className="notifications">
                    <Link href={"/notifications"}>
                        <span>
                            <div className="icon">
                                <Image height={26} width={26} src="/icons/notif.svg" alt="logo" className="h-[26px]" />
                            </div>
                            
                        </span>
                    </Link>
                </div>
                <div className="messages">
                    <Link href={"/messages"}>
                        <span>
                            <div className="icon">
                                <Image height={26} width={26} src="/icons/msg.svg" alt="logo" className="h-[26px]" />
                            </div>
                            
                        </span>
                    </Link>
                </div>
                <div className="grok">
                    <Link href={"/grok"}>
                        <span>
                            <div className="icon">
                                <Image height={26} width={26} src="/icons/grok.svg" alt="logo" className="h-[26px]" />
                            </div>
                            
                        </span>
                    </Link>
                </div>
                <div className="communities">
                    <Link href={"/communities"}>
                        <span>
                            <div className="icon">
                                <Image height={26} width={26} src="/icons/communities.svg" alt="logo" className="h-[26px] " />
                            </div>
                            
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
