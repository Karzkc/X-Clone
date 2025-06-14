import Image from 'next/image'
import React, { useState, useEffect } from 'react'


const Posts = () => {

    //Like Toggle
    const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLikes = localStorage.getItem('likes_map');
            if (storedLikes) {
                setLikes(JSON.parse(storedLikes));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('likes_map', JSON.stringify(likes));
        }
    }, [likes]);

    const handleLikeToggle = (index: number) => {
        setLikes((prevLikes : { [key: number]: boolean }) => ({
            ...prevLikes,
            [index]: !prevLikes[index],
        }));
    };

    //Bookmark Toggle
    const [bookmark, setBookmark] = useState<{ [key: number]: boolean }>({})
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedBook = localStorage.getItem('book_map');
            if (storedBook) {
                setBookmark(JSON.parse(storedBook));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('book_map', JSON.stringify(bookmark));
        }
    }, [bookmark]);

    const handleBookmark = (index: number) => {
        setBookmark((prevBook: { [key: number]: boolean }) => ({
            ...prevBook,
            [index]: !prevBook[index],
        }));
        
    };


    const posts_collection = [
        [
            "https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
            "Cristiano Ronaldo",
            "@Cristiano",
            "Jun 10",
            "🇵🇹❤️ Feliz Dia de Portugal",
            "https://pbs.twimg.com/media/GtEksXAXYAAd5M4?format=jpg&name=large",
            "9.7K",
            "55K",
            "943K",
            "43M"
        ],
        [
            "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg", // Narendra Modi
            "Narendra Modi",
            "@narendramodi",
            "Jun 2",
            "An exceptional achievement by Gukesh! Congratulations to him for triumphing over the very best. His first-ever win against Magnus Carlsen in Round 6 of Norway Chess 2025 showcases his brilliance and dedication. Wishing him continued success in the journey ahead.\n\n@DGukesh",
            "https://pbs.twimg.com/media/GscYxVXWQAAh4nV?format=png&name=small",
            "3.2K",
            "30K",
            "333K",
            "23M"
        ],
        [
            "https://pbs.twimg.com/profile_images/1926284313365979137/o2cF3MeJ_400x400.jpg",
            "Elon Musk",
            "@elonmusk",
            "13h",
            "This is not ok",
            "https://pbs.twimg.com/media/Gs95WgQa8AESI5j?format=jpg&name=small",
            "55K",
            "62K",
            "113K",
            "84M"
        ],

        [
            "https://pbs.twimg.com/profile_images/1304292122686713857/lrp_AtSy_400x400.jpg", // IPL
            "IndianPremierLeague",
            "@IPL",
            "Jun 3",
            "CHAMPIONS OF #TATAIPL 2025 🏆😄\nThe ROYAL CHALLENGERS BENGALURU have done it for the first time ❤️",
            "https://pbs.twimg.com/media/GsiXwyBbEAA5o84?format=jpg&name=large", // post image
            "366",
            "5.3K",
            "26K",
            "626K"
        ],
        [
            "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg", // MrBeast
            "MrBeast",
            "@MrBeast",
            "Jun 7",
            "I took my fiancé on dates ranging from $1 all the way up to $500,000 in the new video! Madison Beer even went on a date with Nolan 😭",
            "https://pbs.twimg.com/media/Gs2-Lt0WcAAHNRc?format=jpg&name=large",
            "2.6K",
            "2.4K",
            "78K",
            "5.2M"
        ],

    ];

    return (
        <>
            {posts_collection.map((item, index) => {
                return (
                    <div key={index} className="posts px-4 py-3 cursor-pointer  h-fit fl flex-col gap-2 border-t-1 border-t-[#2F3336]" >

                        <div className="posts-head flex items-start gap-2 h-max relative  w-full">
                            <div className="pfp  ">
                                <div className='relative w-[40px] aspect-square overflow-hidden'>

                                    <Image
                                        src={item[0]}
                                        alt="pfp"
                                        fill
                                        className="rounded-4xl object-contain"
                                    />
                                </div>
                            </div>

                            <div className="handle-details flex flex-col  leading-none text-[16px] ">
                                <div className="flex items-center gap-1 text-white mb-2">
                                    <span className="font-bold hover:underline">{item[1]}</span>
                                    <svg viewBox="0 0 22 22" aria-label="Verified account"
                                        role="img" className="w-[16px] h-[16px] fill-blue-500 r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                        </path>
                                        </g>
                                    </svg>
                                    <span className="text-[#5d6166]">{item[2]}</span>
                                    <span className="text-[#5d6166]">·</span>
                                    <span className="text-[#5d6166]">{item[3]}</span>
                                </div>
                                <div className="posts-text text-white text-[15px] leading-[1.2] mt-1 ">
                                    {item[4]}
                                </div>
                            </div>


                        </div>

                        <div className="post-content w-full flex justify-start pl-12 ">
                            <Image src={item[5]} alt='pic' width={382} height={510} className='rounded-2xl' />
                        </div>
                        <div className="pl-14 post-tools flex items-center justify-between w-full">
                            <div className=" replies ">
                                <span className='post-icons'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='repsvg h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                </span>
                                <span className='reptext text-[13px] font-[500] text-[#4d5154]'>
                                    {item[6]}
                                </span>
                            </div>
                            <div className=" reposts">
                                <span className='post-icons' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='reposvg h-[18px]' ><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                </span>
                                <span className='repotext text-[13px] font-[500] text-[#4d5154]'>
                                    {item[7]}
                                </span>
                            </div>
                            <div onClick={() => handleLikeToggle(index)} className=" likes">
                                <span className='post-icons'>
                                    {likes[index] ?
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill='#F8177F' className='lsvg h-[18px]'><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg> :
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='lsvg h-[18px]' ><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                    }
                                </span>
                                <span className='ltext text-[13px] font-[500] text-[#4d5154]'>
                                    {item[8]}
                                </span>
                            </div>
                            <div className=" views">
                                <span className='post-icons' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='vsvg h-[18px]' ><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
                                </span>
                                <span className='vtext text-[13px] font-[500] text-[#4d5154]'>
                                    {item[9]}
                                </span>
                            </div>
                            <div className='others fl gap-1'>
                                <div className=" bookmark" onClick={() => { handleBookmark(index) }
                                } >
                                    <span className='blue-icon' >
                                        {
                                            bookmark[index] ?
                                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#1D9BF0' className=' h-[18px]'><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path></g></svg> :
                                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='blue-svg h-[18px]' ><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                                        }
                                    </span>
                                    <span>

                                    </span>
                                </div>
                                <div className=" share-post">
                                    <span className='blue-icon'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='blue-svg h-[18px]' ><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                                    </span>
                                    <span>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            })}


        </>
    )
}

export default Posts
