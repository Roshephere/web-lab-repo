let currentdate = new Date();
console.log("Current date:", currentdate);

//Add Days
function addDate(date, days){
    let result = new Date(date);
    result.setDate(result.getDate()+days);
    return result;

}
//Add hours
function addHours(date, hours){
    let result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;

}

console.log('Date after 5 days:',addDate(currentdate, 5));
console.log('Date before 3 days:',addDate(currentdate, -3));
console.log('Date after 10 hours:',addDate(currentdate, 10));
console.log('Date before 6 hours:',addDate(currentdate, -6));
