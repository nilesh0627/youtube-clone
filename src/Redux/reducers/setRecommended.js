const defaultState={
    items:[],
    nextPageToken:''
}
export function setRecommended(recommended=defaultState,action){
    switch (action.type) {
        case 'RECOMMENDED':
            recommended={
                items:[...action.payload.items],
                nextPageToken:action.payload.nextPageToken
            }
            return recommended
        case 'LOAD_MORE_RECOMMENDED':
            recommended={
                items:[...recommended.items,...action.payload.items],
                nextPageToken:action.payload.nextPageToken
            }
            return recommended
        default:
            return recommended
    }
}

