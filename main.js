// Created For Romansyah
// >> This File Written By Qkie <<
// !! Editing this may cause some Error !!
// --> Unless you know what are you doing <--
// <!> Dont delete dis <!>

//count Down Time
var backload = document.getElementById("waittill");
var countDownDate = new Date("Nov 17, 2020 00:00:00").getTime();
var timeback = document.getElementById("time");
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  timeback.innerHTML = days + " days , " + hours + " hours , "
  + minutes + "  minutes , " + seconds + " seconds ";
  if (distance < 0) {
    clearInterval(x);
    setTimeout(function(){
    backload.style.display = "none";}, 1000)
    timeback.innerHTML = "Happy birthday!"
  }
}, 1000);

//toggle function
function toggle(show, hide){
  if(!show){document.getElementById(hide).style.display = "none";}
  else if(!hide){document.getElementById(show).style.display = "block";}
  else {
  document.getElementById(show).style.display = "block";
  document.getElementById(hide).style.display = "none";
    }
}
//password verification waiting time
function waitverify(input, show, hide){
  var inpass = btoa(document.getElementById(input).value),
  password = 'cm9tYW51bHRhaA==';
  if(inpass === password){
    console.log("access granted");
    toggle(show, hide);
  }else{
    toggle('wrongpass', "")
    setTimeout(function(){
      toggle('', 'wrongpass')
    }, 5000);
  }
}