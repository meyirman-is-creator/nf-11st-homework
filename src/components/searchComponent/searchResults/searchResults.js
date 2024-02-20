import './searchResult.css'
import React from 'react'
import SearchResultItem from './searchResultItem/searchResulItem';
export default class SearchResult extends React.Component {

    render() {

        const { SearchResults, draw } = this.props;
        // console.log(SearchResults);
        
        return (

            <div className='results'>
                {SearchResults !== null && SearchResults.length > 0 && SearchResults.map(item => <SearchResultItem item={item} />)}

            </div>
        )

    }
}