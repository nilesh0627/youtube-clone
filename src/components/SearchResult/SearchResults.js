import React from 'react'
import './SearchResults.css'
import SearchResult from './SearchResult'
function SearchResults({searchResults}) {
    return (
        <div className="searchResults__container">
            <h2>Search Results</h2>
            {
                searchResults.map((searchResult)=>{
                    return <SearchResult key={searchResult.id.videoId} searchResult={searchResult}/>
                })
            }
        </div>
    )
}

export default SearchResults
