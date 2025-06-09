import Image from 'next/image'
import React from 'react'


const Posts = () => {
    return (
        <>
            <div className="post-section mt-5">
                <div className="posts px-4 pt-3 cursor-pointer  h-fit fl flex-col gap-4 border-t-1 border-t-[#2F3336]">

                    <div className="posts-head flex items-start gap-2 h-12 relative  w-full">
                        <div className="pfp">
                            <Image
                                src="https://pbs.twimg.com/profile_images/1926284313365979137/o2cF3MeJ_400x400.jpg"
                                alt="pfp"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>

                        <div className="handle-details flex flex-col justify-center leading-none text-[16px] mb-5">
                            <div className="flex items-center gap-1 text-white">
                                <span className="font-bold hover:underline">Elon Musk</span>
                                <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-[16px] h-[16px] fill-blue-500 r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                </path>
                                </g>
                                </svg>
                                <span className="text-[#5d6166]">@elonmusk</span>
                                <span className="text-[#5d6166]">·</span>
                                <span className="text-[#5d6166]">13h</span>
                            </div>
                        </div>


                        <div className="posts-text text-white text-[16px] pl-[48px] absolute bottom-0 left-0 ">
                            This is not ok
                        </div>
                    </div>

                    <div className="post-content w-full flex justify-start pl-12 ">
                        <Image src={"https://pbs.twimg.com/media/Gs95WgQa8AESI5j?format=jpg&name=small"} alt='pic' width={382} height={510} className='rounded-2xl' />
                    </div>
                    <div className="post-tools flex items-center justify-evenly w-full">
                        <div className=" replies">
                            <span >
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                            </span>
                            <span className='text-[13px] font-[500] text-[#4d5154]'>
                                55K
                            </span>
                        </div>
                        <div className=" reposts">
                            <span >
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                            </span>
                            <span className='text-[13px] font-[500] text-[#4d5154]'>
                                62K
                            </span>
                        </div>
                        <div className=" likes">
                            <span >
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                            </span>
                            <span className='text-[13px] font-[500] text-[#4d5154]'>
                                113K
                            </span>
                        </div>
                        <div className=" views">
                            <span >
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                            </span>
                            <span className='text-[13px] font-[500] text-[#4d5154]'>
                                84M
                            </span>
                        </div>
                        <div className='others fl gap-1'>
                            <div className=" bookmark">
                                <span >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                </span>
                                <span>

                                </span>
                            </div>
                            <div className=" share-post">
                                <span >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='#4d5154' className='h-[18px]' ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                </span>
                                <span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
