import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import SearchResults from '../../components/SearchResult/SearchResults'
function Results({searchVideo,searchResults}) {
    return (
        <MainLayout searchVideo={searchVideo}>
            <SearchResults searchResults={searchResults}/>
        </MainLayout>
    )
}

export default Results
