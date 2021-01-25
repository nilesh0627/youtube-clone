const defaultState={
    items:[],
    nextPageToken:''
}
export function setRecommended(recommended=defaultState,action){
    switch (action.type) {
        case 'RECOMMENDED':
            return {...recommended,items:[...defaultState.items,...action.payload.items],nextPageToken:action.payload.nextPageToken}
        default:
            return recommended
    }
}