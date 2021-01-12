import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import SearchResults from '../../components/SearchResult/SearchResults'
function Results({searchVideo}) {
    return (
        <MainLayout searchVideo={searchVideo}>
            <SearchResults />
        </MainLayout>
    )
}

export default Results
