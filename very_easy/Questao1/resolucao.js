function calculateAverage(...numbers){
    let sum = 0
    for(const number of numbers){
       sum+=number
    }
    const avg = sum/numbers.length
    return avg
 }
 