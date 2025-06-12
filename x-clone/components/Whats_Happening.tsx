import React from 'react'

const Whats_Happening = () => {
    const trends_collection = [
        ["Politics · Trending", "#JoeBiden", "212K"],
        ["Only on X · Trending", "#MondayMotivation", "10.9K"],
        ["Trending in India", "Self Growth", "10.2K"],
        ["Trending in Virat Kohli", "Virat Kohli's RCB", "4,574"],
    ]
    return (
        <>
            <div className="what border-1 border-[#2F3336] rounded-2xl h-max mt-5   ">
                <div className="what-title text-xl w-full font-extrabold p-4 sticky  ">
                    What’s happening
                </div>
                <div className="trendings w-full   overflow-scroll  ">
                    {
                        trends_collection.map((item, index) => {
                            return (
                                <div key={index} className='trend h-[82px] pl-3 relative  fl ' >
                                    <div className='w-full'>
                                        <div className="gray-topic text-[#666b6f] text-[13px] font-[500] ">
                                            {item[0]}
                                        </div>
                                        <div className="trend-title font-bold text-[16px]">
                                            {item[1]}
                                        </div>
                                        <div className="post-count text-[#666b6f] text-[13px] font-[500] ">
                                            {item[2]} posts
                                        </div>
                                        <div className="blue-icon absolute right-1 top-3">
                                            <svg fill='#666b6f' viewBox="0 0 24 24" aria-hidden="true" className="bluesvg h-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>


            </div >
        </>
    )
}

export default Whats_Happening
