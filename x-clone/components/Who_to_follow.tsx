import React from 'react'

const Who_to_follow = () => {
    return (
        <>
            <div className="who-follow border-1 border-[#2F3336] rounded-2xl h-90 mt-5">
                <header className='text-xl font-[700] w-full p-4'>
                    Who to follow
                </header>
                <div className="follows">
                    <div className="follow-box border w-full flex ">
                        <div className="follow-pfp grid flex-1/5 fl">
                            <img src="/icons/user.png" alt="user" className='h-12 w-12' />
                        </div>
                        <div className="handle-details flex-3/5 flex-col items-start ">
                            <div className="handle-name">
                                Youtube India
                            </div>
                            <div className="handle-id">
                                @YoutubeIndia
                            </div>
                        </div>
                        <div className="follow-button flex-1/5 border fl">
                            Follow
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who_to_follow
