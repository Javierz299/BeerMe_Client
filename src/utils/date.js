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

export const convertTime = (t) => {
  console.log('t',t)
   t = t.slice(11,19).split(':')
   console.log('t',t)
  
  let hours = t[0];
  let minutes = t[1];
  //let seconds = t[2];
  let timeValue = "" + ((hours > 12) ?  "1" + (hours - 14)  : hours);
      timeValue += (minutes < 10) ? ":" + minutes: ":" + minutes;
      //timeValue += (seconds < 10) ? ":0" : ":" + seconds;
      timeValue += (hours >= 12) ? " P.M." : " A.M.";
console.log("timevalue",timeValue);
return timeValue
}

export const convertDate = (d) => {
  console.log('d',d)
   let dt = d.toString()
 
  
console.log("datevalue",dt);
return dt
}

