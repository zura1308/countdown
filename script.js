let now = new Date();
document.getElementById("now").innerHTML = now;


let newyear = new Date(2021,0,1);
document.getElementById("newyear").innerHTML = newyear;


function getDifference(b){
    let a = new Date();
    let sec = Math.floor(Math.abs(a - b)/1000);
    let day = Math.floor(sec / 60 / 60 / 24);
    let hour = Math.floor(sec / 60 / 60) % 24;
    let min = Math.floor(sec / 60) % 60;
    sec = sec % 60;
    document.getElementById("days").textContent = day;
    document.getElementById("hours").textContent = hour;
    document.getElementById("mins").textContent = min;
    document.getElementById("secs").textContent = sec;
}

setInterval(getDifference, 1000, newyear);