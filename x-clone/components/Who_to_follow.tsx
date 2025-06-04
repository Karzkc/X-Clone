import React from 'react'
import Image from 'next/image'
const Who_to_follow = () => {
    return (
        <>
            <div className="who-follow border-1 border-[#2F3336] rounded-2xl h-90 mt-5">
                <header className='text-xl font-[700] w-full p-4'>
                    Who to follow
                </header>
                <div className="follows fl h-18">
                    <div className="follow-box  w-full fl cursor-pointer  px-3">
                        <div className="follow-pfp grid flex-[2.5rem] fl  h-10 fl ">
                            <Image height={30} width={30} src="https://pbs.twimg.com/profile_images/1861992383400816640/2ovEVRmy_400x400.jpg" alt="user" className=' h-10 w-10 rounded-4xl' />
                        </div>
                        <div className="handle-details flex-3/5 flex-col items-start ml-2 text-[16px]  ">
                            <div className="handle-name hover:underline font-[600]">
                                Youtube India
                            </div>
                            <div className="handle-id text-[#5d6166]">
                                @YoutubeIndia
                            </div>
                        </div>
                        <div className=" follow-button flex-[25%] fl  ">
                            <div className="button-hover fl text-black bg-white rounded-4xl h-8 w-full font-[600] text-sm ">
                                Follow
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who_to_follow
