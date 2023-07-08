import React from 'react'

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 text-gray-800 rounded-full py-1 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 w-11.25rem h-1.875rem"
      />
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="13" height="12" viewBox="0 0 13 12" fill="none"
        className='text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2'>
        <circle cx="5" cy="5" r="4.5" stroke="#858585"/>
        <line x1="8.35355" y1="7.64645" x2="12.3536" y2="11.6464" stroke="#858585"/>
      </svg>
    </div>

  )
}

export default SearchBar
