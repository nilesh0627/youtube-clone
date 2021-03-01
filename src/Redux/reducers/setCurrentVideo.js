export function setCurrentVideo(video={},action){
    switch (action.type) {
        case 'VIDEO_DETAIL':
            video=action.payload
            return video
    
        default:
                return video
    }
}