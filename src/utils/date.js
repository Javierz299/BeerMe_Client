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
return dateStr
}

export const convertTime = (t,d) => {
  console.log('t',t)
   let dt = d.toString()
   t = t.split(':');
  let hours = t[0];
  let minutes = t[1];
  //let seconds = t[2];
  let timeValue = "" + ((hours >12) ? hours - 12 :hours);
      timeValue += (minutes < 10) ? ":" + minutes: ":" + minutes;
      //timeValue += (seconds < 10) ? ":0" : ":" + seconds;
      timeValue += (hours >= 12) ? " P.M." : " A.M.";
      timeValue += dt
console.log("timevalue",timeValue,dt);
return timeValue
}


