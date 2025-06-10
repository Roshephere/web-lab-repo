//Current date and time 
let date1 = new Date();

//from a date string
let date2 = new Date('2025-06-10T15:30:00');

//from milliseconds since unix epoch (Jan 1, 1970)
let date3 = new Date(0);

//from separate date and time components(year, months, day , hours, minutes, sec, ms)
//Note:: month is 0-indexed (0=Jan , 11=DEC)

let date4 = new Date(2025, 5 , 10, 15, 30, 0);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);


