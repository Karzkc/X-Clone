import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#71767B] py-2 my-5">
                <a href="#" className="hover:underline">Terms of Service</a>
                <span className="text-[#71767B]">|</span>

                <a href="#" className="hover:underline">Privacy Policy</a>
                <span className="text-[#71767B]">|</span>

                <a href="#" className="hover:underline">Cookie Policy</a>
                <span className="text-[#71767B]">|</span>

                <a href="#" className="hover:underline">Accessibility</a>
                <span className="text-[#71767B]">|</span>

                <a href="#" className="hover:underline">Ads info</a>
                <span className="text-[#71767B]">|</span>

                <a href="#" className="hover:underline">More <span className="inline-block">...</span></a>
                <span className="text-[#71767B]">|</span>

                <span className="text-[#71767B]">© 2025 X Corp.</span>
            </div>

        </>
    )
}

export default Footer
