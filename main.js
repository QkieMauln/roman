// Created For Romansyah
// >> This File Written By Qkie <<
// !! Editing this may cause some Error !!
// --> Unless you know what are you doing <--
// <!> Dont delete dis <!>

//listener
document.getElementById("passin").addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    waitverify('passin', 'loadbox', 'waittill');
  }
})

//body color changer
function rgbToHex(rgb) {
var hex= Number(rgb).toString(16);
 if(hex.length<2) {
  hex = "0" + hex;
  }
 return hex.toUpperCase();
}
function Converter(r,g,b){
 var red = rgbToHex(r);
 var green = rgbToHex(g);
 var blue = rgbToHex(b);
 return red+green+blue;
}
//Here... I got Headache for Solving this!
function colorRandom(){
var red = Math.floor(Math.random()*205)+50;
var green = Math.floor(Math.random()*205)+50;
var blue = Math.floor(Math.random()*205)+50;
return "#"+Converter(red, green, blue);
}
//setInterval(function(){
//  document.body.style.background = colorRandom();
//}, 5000);


//count Down Time
var backload = document.getElementById("waittill");
var countDownDate = new Date("Nov 17, 2020 00:00:00").getTime();
var timeback = document.getElementById("time");
var cdount = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  timeback.innerHTML = days + " days , " + hours + " hours , "
  + minutes + "  minutes , " + seconds + " seconds ";
  if (distance < 0) {
    clearInterval(cdount);
    document.getElementById("waittill").style.opacity = 0;
    toggle("loadbox","");
    setTimeout(function(){
      toggle("", "waittill")}, 1000)
    timeback.innerHTML = "ITS STARTED!"
    startloader();
  }
}, 1000);

//loading bar
function startloader(){
var loadtick1 = 0, loadtick = setInterval(function(){
  loadtick1++;
  document.getElementById("loadprogress").style.width = loadtick1 + "%";
  document.getElementById("loadstat").innerHTML = loadtick1+ " %";
  document.getElementById("loadinf").innerHTML = `Nav. User Agent : ${navigator.userAgent}`
  if(loadtick1>99){clearInterval(loadtick);
  document.getElementById("loadstat").innerHTML = "420.69 % Made By Qky hehe";
    setTimeout(function(){
    toggle('kesatu','loadbox')}, 1000);}
}, 10);}

//toggle function
function toggle(show, hide){
  if(!show){document.getElementById(hide).style.opacity = 0;
  setTimeout(function(){
  document.getElementById(hide).style.opacity = 1;
  document.getElementById(hide).style.display = "none";},500)}
  else if(!hide){document.getElementById(show).style.display = "block";}
  else {
  document.getElementById(show).style.display = "block";
  document.getElementById(hide).style.opacity = 0;
  setTimeout(function(){
  document.getElementById(hide).style.opacity = 1;
  document.getElementById(hide).style.display = "none";},500);
    }
}
//password verification waiting time
function waitverify(input, show, hide){
  var inpass = btoa(btoa(document.getElementById(input).value)),
  password = 'Y205dFlXNTFiSFJoYUE9PQ==';
  if(inpass === password){
    console.log("access granted");
    toggle(show, hide);
    startloader();
  }else{
    toggle('wrongpass', "")
    setTimeout(function(){
      toggle('', 'wrongpass')
    }, 5000);
  }
}

function lets_go(){
  $("body").css({"background":"#000"});
  $("#kesatu").css({"background":"#161c30","box-shadow":"0 0 7px 1px #6bcbff,0 0 37px 5px #6bcbff,0 0 127px 1px #6bcbff"});
  $("#fuckingo_btn").css({"background":"#161c30","bottom":"-10px"})
  setTimeout(()=>{
    $("#fuckingo_btn").css({"transition":"0.25s"});
  },5000)
}

function just_fucking_go_already(){
  var dest_a = 0;
  $("#kesatu").css({"transition":"0.25s"});
  setInterval(()=>{dest_a++;shakeit("#fuckingo_btn", dest_a);shakeit_calc("#kesatu", dest_a,"-50% +","-50% +");neoneff("#fuckingo_btn");neoneff("#kesatu");},100);
  setTimeout(()=>{
    $("#introwhiteit").show();
    setTimeout(()=>{$("#introwhiteit").hide();toggle("kedua","kesatu")},4400);
},1000);
}

function shakeit(docu,strength){
  $(docu).css({"transform":`translate(${(Math.random()*strength) - (strength/2)}px, ${(Math.random()*strength) - (strength/2)}px) rotate(${(Math.random()*strength) - (strength/2)}deg)`})
}

function shakeit_calc(docu,strength, x, y){
  $(docu).css({"transform":`translate(calc( ${x} ${(Math.random()*strength) - (strength/2)}px ), calc( ${y} ${(Math.random()*strength) - (strength/2)}px )) rotate(${(Math.random()*strength) - (strength/2)}deg)`})
}

function neoneff(docu){
  var bruh= Math.random();
  $(docu).css({"box-shadow":`0 0 7px 1px rgba(107, 203, 255, ${bruh}),0 0 37px 5px rgba(107, 203, 255, ${bruh}),0 0 127px 1px rgba(107, 203, 255, ${bruh})`})
}