let hr= document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');


function displayTime(){
    let date = new Date();

    //getting hour,mins,secs from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    

    let hRotation= 30*hh + mm/2 
    let mRotation= 6*mm;
    let sRotation= 6*ss;

 hr.style.transform=`rotate(${hRotation}deg)`;
 min.style.transform=`rotate(${mRotation}deg)`;
 sec.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000);

if(hrs >=12){
    session.innerHTML = 'PM';
}else{
    session.innerHTML = 'AM';
}

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    var day= dateTime.getDay();

    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    document.getElementById('day').innerHTML=`Day:${day}`;
}
setInterval(displayTime,10);

