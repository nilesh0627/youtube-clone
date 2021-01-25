const defaultState={
    items:[],
    nextPageToken:''
}
export function setSearchResults(searchResults=defaultState,action){
    switch (action.type) {

        case 'SEARCH_RESULTS':
            console.log(action.payload)
            searchResults={
                items:[...searchResults.items,...action.payload.data.items],
                nextPageToken:action.payload.nextPageToken
            }
            return searchResults    
        case 'SEARCH_QUERY':
            searchResults=defaultState
            return searchResults    
        default:
            return searchResults
    }
}


// action.payload.text