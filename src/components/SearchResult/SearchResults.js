import React from 'react'
import './SearchResults.css'
import SearchResult from './SearchResult'
import {connect} from 'react-redux'
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
const mapStateToProps=({searchResults})=>{
    return {
        searchResults:searchResults.items
    }
}


export default connect(mapStateToProps)(SearchResults)


