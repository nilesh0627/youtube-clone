const defaultState={
    items:[],
    nextPageToken:''
}
export function setSearchResults(searchResults=defaultState,action){
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return {...searchResults,items:[...defaultState.items,...action.payload.items],nextPagetoken:action.payload.nextPageToken}
        default:
            return searchResults
    }
}