import React, { useState } from 'react'


export default function SearchBar({ searchQuery, setSearchQuery }) {

    const handleSearch = () => {
        // Perform any necessary validation or logic here
        // and then update the search query
        setSearchQuery(searchQuery);
    };

    return (
        <div >
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                
                
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-2 peer h-full w-full outline-none text-sm text-gray-700 pr-2" id="search" placeholder="Search something.." />

                <div className="grid place-items-center h-full w-12 text-gray-300 hover:bg-gray-100 hover:rounded-lg cursor-pointer" onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>            

            </div>

        </div>
    )
}
