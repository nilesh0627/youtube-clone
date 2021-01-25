const defaultState={
    items:[],
    nextPageToken:''
}
export function setSearchResults(searchResults=defaultState,action){
    switch (action.type) {
        case 'SEARCH_QUERY':
            searchResults=defaultState
            return searchResults
        case 'SEARCH_RESULTS':
            searchResults={
                items:[...searchResults.items,...action.payload.items],
                nextPageToken:action.payload.nextPageToken
            }
            return searchResults        
        default:
            return searchResults
    }
}


// action.payload.text