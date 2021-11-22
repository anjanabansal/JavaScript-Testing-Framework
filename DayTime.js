//Javascript code to get current day and time in particular format.
let sdate = new Date();
let sday = sdate.getDay();
let a = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"Saturday"];
console.log("Today is : " + a[sday]);

let currentTime = sdate.getHours() + " " + (sdate.getHours()> 12 ? 'PM':'AM') + ":"  + sdate.getMinutes() + ":" +  sdate.getSeconds();
console.log("Current Time is ": + currentTime);
