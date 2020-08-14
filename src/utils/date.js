export const getDateOnly  = () => {
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd
console.log(today);
return today
}

export const getDate_Time = () => {
let date = new Date();
let dateStr =
  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
  ("00" + date.getDate()).slice(-2) + "-" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);
console.log(dateStr);
return dateStr
}


