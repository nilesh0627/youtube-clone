export function setSearchQuery(term='',action){
    switch (action.type) {
        case 'SEARCH_QUERY':
                term=action.payload
                return term    
        default:
            return term
    }
}