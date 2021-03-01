export function istDateFormat(date){
    let istDate=new Date(date)
    let dateChunks=(istDate+'').split(' ')

    return dateChunks[2] +" "+dateChunks[1] +" "+dateChunks[3]
}