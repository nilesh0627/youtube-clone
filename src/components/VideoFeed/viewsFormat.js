export function viewsFormat(views){
    let result,output;
    if(views<=999)
        result=views
    else if(views>=1000 && views<=999999)
        result=views/1000+'K'
    else if(views>=1000000 && views<=999999999)
        result=views/1000000+'M'   
    else if(views>=1000000000 && views<=999999999999)
        result=views/1000000000+'B'


    const arr1=result.split('.')
    if(arr1[0]>=10)
    output=arr1[0]+result.slice(-1)
    else
    output=result.slice(0,3)+result.slice(-1)
    return output   
}