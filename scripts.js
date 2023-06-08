setInterval(()=>{
    let hour = document.getElementById("hour")
let minute = document.getElementById('minute');
let sec = document.getElementById('sec');
let ampm= document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h>=12 ? "PM" : "AM";

if(h>12){
    h=h-12;
}

if(h<10){
    h="0"+h;
}

if(m<10){
    m = "0"+m;
}

if(s <10){
    s = "0"+s;
}
 


hour.innerHTML = h;
minute.innerHTML = m;
sec.innerHTML = s;
ampm.innerHTML = am;
})

