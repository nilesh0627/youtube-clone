import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import SearchResults from '../../components/SearchResult/SearchResults'
function Results({searchVideo,searchResults}) {
    return (
        <MainLayout >
            <SearchResults />
        </MainLayout>
    )
}

export default Results
