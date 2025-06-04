import React, { useRef, useState } from 'react'
import Image from 'next/image'
const Search_input = () => {
    // Searchbar Cancel Button Logic
    const search_ref = useRef<HTMLInputElement>(null)
    const [searchCancel, setSearchCancel] = useState(false);
    const handleCancel = () => {
        setSearchValue("")
        if (search_ref.current) {
            search_ref.current.focus();
        }
        setSearchCancel(false)
    }

    // Searchbar Value Logic
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        setSearchCancel(value.length > 0);

    };

    // Searchbar Suggestion Popup Logic
    const [search_popup, setSearch_popup] = useState(false);
    const searchPopupAppear = (e: boolean) => {
        setSearch_popup(e)
    }
    
    return (
        <div>
            <div className='flex items-center rounded-4xl border-1 pr-2 border-[#2F3336] focus-within:border-[#1d9bf0]'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    ref={search_ref}
                    className="search-input caret-[#1d9bf0] outline-none h-max w-full p-2 pl-10 placeholder:text-white"
                    onChange={(e) => { handleSearch(e) }}
                    onFocus={() => searchPopupAppear(true)}
                    onBlur={() => searchPopupAppear(false)}
                />
                {searchCancel && <span className='cursor-pointer' onClick={handleCancel}>
                    <Image height={30} width={30} src="/icons/cross.svg" alt="cancel" className='h-6' />
                </span>}
            </div>
            {search_popup && <div className="search-popup !bg-black min-h-[100px] flex justify-center items-start rounded-[8px]">
                <span className='text-[#666a6f] text-[17px] mt-5'> Try searching for people, lists, or keywords </span>
            </div>}
        </div>
    )
}

export default Search_input
