import React from 'react'
import './SearchResults.css'
import SearchResult from './SearchResult'
import Button from '../../utils/Button'
import {videoSearch} from '../../Redux/actions'
import {connect} from 'react-redux'
function SearchResults({searchResults,searchQuery,videoSearch,nextPageToken}) {
    const loadMore=()=>{
        videoSearch(searchQuery,nextPageToken)
    }
    return (
        <div className="searchResults">
            <h2>Search Results</h2>
            <div className="searchResults__container">
            {
                searchResults.map((searchResult)=>{
                    return <SearchResult key={searchResult.id.videoId} searchResult={searchResult}/>
                })
            }
            </div>
            {/* <button onClick={loadMore}>Load More..</button> */}
            <Button text='Load More..' handleClick={loadMore}/>
        </div>
        
    )
}
const mapStateToProps=({searchResults,searchQuery})=>{
    return {
        searchResults:searchResults.items,
        nextPageToken:searchResults.nextPageToken,
        searchQuery:searchQuery
    }
}

const mapDispatchToProps={
    videoSearch:videoSearch
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)


