let nameSurname = prompt("Lütfen Adınızı Ve Soyadınızı Giriniz.");
let info = document.getElementById("nameSurname");
info.innerHTML= nameSurname;

let days =["PAZAR","PAZARTES","SALI","ÇARŞAMBA","PERŞEMBE","CUMA","CUMARTESİ"];
let clock_day = document.getElementById("clock_day");
clock_day.innerHTML=`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${days[new Date().getDay()]} `;
