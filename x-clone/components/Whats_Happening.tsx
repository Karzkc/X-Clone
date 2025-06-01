import React from 'react'

const Whats_Happening = () => {
    return (
        <>
            <div className="what border-1 border-[#2F3336] rounded-2xl h-90 mt-5  ">
                <div className="what-title text-xl w-full font-extrabold p-4 ">
                    What’s happening
                </div>
                <div className="trendings w-full  h-20 pl-4 pt-2 relative">
                    <div>

                        <div className="gray-topic text-[#666b6f] text-[13px] font-[500] ">
                            Politics · Trending
                        </div>
                        <div className="trend-title font-bold text-[16px]">
                            #JoeBiden
                        </div>
                        <div className="post-count text-[#666b6f] text-[13px] font-[500] ">
                            212K posts
                        </div>
                        <div className="hamburger absolute right-1 top-3 z-10 fl">
                            <svg fill='#666b6f' viewBox="0 0 24 24" aria-hidden="true" className="hamsvg h-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Whats_Happening
