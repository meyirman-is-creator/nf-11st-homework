import './search.css'
import React from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './searchResults/searchResults';
export default class Search extends React.Component {

    render() {
        const { onInputChange, SearchResults } = this.props;
        
        return (
            <div className='search'>
                <SearchBar onInputChange={onInputChange}/>
                <SearchResult SearchResults={SearchResults}/>
            </div>
        )


    }
};