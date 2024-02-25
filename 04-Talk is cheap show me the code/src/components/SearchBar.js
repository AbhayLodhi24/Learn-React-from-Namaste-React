import React, { useState } from 'react'

const SearchBar = () => {
     const [searchText, setSearchText] = useState('KFC') ;
  return (
    <div className='search-bar'>
        <input type="text" placeholder="Search" value = {searchText}  onChange={(e)=>{setSearchText(e.target.value)}} />
        <button >Search</button>
    </div>
  )
}

export default SearchBar;