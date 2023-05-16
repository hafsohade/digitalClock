function startTime() {
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let hour = hours


let time = new Date();

hours.innerHTML = time.getHours()
minutes.innerHTML = time.getMinutes();
seconds.innerHTML = time.getSeconds();


let meridian = document.querySelector("#meridian")

if (hour >=12) {
   meridian. innerHTML = "pm"
}

if (hour > 12) {
    hours.innerHTML = hour - 12
    hours.innerHTML = hour
}
if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML
    
}
}
setInterval(startTime, 100)