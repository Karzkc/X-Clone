import React from 'react'
import Image from 'next/image'
const Who_to_follow = () => {
    const follow_collection = [
        ["Youtube India", "https://pbs.twimg.com/profile_images/1861992383400816640/2ovEVRmy_400x400.jpg", "@YoutubeIndia","/icons/blue-tick.svg"],
        ["ye ", "https://pbs.twimg.com/profile_images/1885922338983579649/W-5uks-5_400x400.jpg", "@kanyewest","/icons/golden-tick.svg"],
        ["Donald J. Trump", "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg", "@realDonaldTrump","/icons/blue-tick.svg"],
        ["Formula 1", "https://pbs.twimg.com/profile_images/1612433922733887489/7f5XFklA_400x400.jpg", "@F1","/icons/blue-tick.svg"],
    ]
    return (
        <>
            <div className="who-follow border-1 border-[#2F3336] rounded-2xl h-fit mt-5 overflow-hidden">
                <header className='text-xl font-[700] w-full p-4'>
                    Who to follow
                </header>
                <div className="follows h-fit  overflow-auto ">
                    {follow_collection.map((item, index) => {
                        return (
                            <div key={index} className="follow-box  w-full fl cursor-pointer  px-3">

                                <div className="follow-pfp  flex-[2.5rem] fl  h-10 " key="Youtube India">
                                    <Image height={30} width={30} src={item[1]} alt="user" className=' h-10 w-10 rounded-4xl' />
                                </div>
                                <div className="handle-details flex-3/5 flex-col items-start ml-2 text-[16px]  ">
                                    <div className="handle-name hover:underline font-[600] flex items-center justify-start gap-1">
                                        {item[0]}
                                        <Image src={item[3]} alt='tick' width={18} height={18}/>
                                    </div>
                                    <div className="handle-id text-[#5d6166]">
                                        {item[2]}
                                    </div>
                                </div>
                                <div className=" follow-button flex-[25%] fl  ">
                                    <div className="button-hover fl text-black bg-white rounded-4xl h-8 w-full font-[600] text-sm ">
                                        Follow
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }


                </div>
            </div>
        </>
    )
}

export default Who_to_follow
