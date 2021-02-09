export function setCurrentVideo(video={},action){
    switch (action.type) {
        case 'CURRENT_VIDEO':
            video=action.payload
            return video
    
        default:
                return video
    }
}