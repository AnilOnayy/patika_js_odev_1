document.querySelector(".show-area").style.display="none";
var name = prompt("Adınız ?","Ebubekir Sıddık Bebek");
document.getElementById("name").innerHTML=name;

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

setInterval(() => {
    let date = new Date();
    let gun =window.gunler[parseInt(date.getDay())];
    let date_text=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+gun;
    document.querySelector("#time").innerHTML=date_text;
    document.querySelector(".show-area").style.display="block";

}, 1000);