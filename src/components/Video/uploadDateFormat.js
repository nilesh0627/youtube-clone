export function uploadDateFormat(date){
    const uploadDate=new Date(date);
    const today=new Date();
    const yearDiff=today.getFullYear()-uploadDate.getFullYear()
    const monthDiff=today.getMonth()-uploadDate.getMonth()
    const dayDiff=today.getDay()-uploadDate.getDay()
    const hourDiff=today.getHours()-uploadDate.getHours()
    const minuteDiff=today.getMinutes()-uploadDate.getMinutes()
    const secondDiff=today.getSeconds()-uploadDate.getSeconds()
    if(yearDiff===0){
        if(monthDiff===0){
            if(dayDiff===0){
                if(hourDiff===0){
                    if(minuteDiff===0)
                        return `${secondDiff} seconds ago`
                    else return `${minuteDiff} minutes ago`
                }
                else return `${hourDiff} hour ago`

            }
            else return `${dayDiff} day ago`
        }
        else return `${monthDiff} months ago`
    }
    else return `${yearDiff} year ago`
}


// date="2021-01-07T23:00:20Z"