import React, { useState } from 'react';
import './searchBar.css'
import { SEARCH_ICON } from './img/images';
export default function SearchBar({ onInputChange,onChangeSearch }) {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onInputChange(event.target.value);
    };
    return (
        <div className='search__bar'>
            {SEARCH_ICON}
            <input className="search__bar-input" onChange={(e)=>handleInputChange(e)} placeholder='Search...' />
        </div>
    )
}