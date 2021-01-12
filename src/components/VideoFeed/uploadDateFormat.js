export function uploadDateFormat(date){
    const uploadDate=new Date(date);
    const today=new Date();
    const result=(today.getTime()-uploadDate.getTime())/(1000)
    let secondDiff=result
    let minuteDiff=secondDiff/60
    let hourDiff=minuteDiff/60
    let dayDiff=hourDiff/24
    let monthDiff=dayDiff/30
    let yearDiff=monthDiff/12
    secondDiff=Math.floor(secondDiff)
    minuteDiff=Math.floor(minuteDiff)
    hourDiff=Math.floor(hourDiff)
    dayDiff=Math.floor(dayDiff)
    monthDiff=Math.floor(monthDiff)
    yearDiff=Math.floor(yearDiff)

    let output;
    if(yearDiff>=1){
        yearDiff===1 ? output=`1 year ago` : output=`${yearDiff} years ago`
    }
    else if(monthDiff>=1){
        monthDiff===1 ? output=`1 month ago` :output=`${monthDiff} months ago`
    }
    else if(dayDiff>=1){
        dayDiff===1 ? output=`1 day ago` : output=`${dayDiff} days ago`
    }
    else if(hourDiff>=1){
        hourDiff===1 ? output=`1 hour ago` : output=`${hourDiff} hours ago`
    }
    else if(minuteDiff>=1){
        minuteDiff===1 ? output=`1 minute ago` : output=`${minuteDiff} minutes ago`
    }
    else if(secondDiff>=1){
        secondDiff===1 ? output=`1 second ago` : output=`${secondDiff} seconds ago`
    }
    else{
        output=`0 seconds ago`
    }

    // const arr1=output.split(' ')
    // return `${Math.floor(arr1[0])} ${arr1[1]} ${arr1[2]}`
    return output
    
}

