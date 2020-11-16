// Created For Romansyah
// >> This File Written By Qkie <<
// !! Editing this may cause some Error !!
// --> Unless you know what are you doing <--
// <!> Dont delete dis <!>

// Did you miss it? The Warning in the HTML Code!

//listener

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
document.getElementById("passin").addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    waitverify('passin', 'loadbox', 'waittill');
  }
});

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

var app4 = new Vue({
  el:"#vue-test",
    data: {
      todos: [
        { 
          i:1,
          by: "Skincraft", 
          d:"Rahmanasyah X Farisa",
          url:"assets/img/Skincraft.png"
        },
        { 
          i:2,
          by: "Candy Cat", 
          d:"",
          url:"assets/img/Candycat.png"
        },
        { 
          i:3,
          by: "Candy Cat", 
          d:"",
          url:"assets/img/Candycat2.png"
        },
        { 
          i:4,
          by: "Diamond Aquila", 
          d:"",
          url:"assets/img/Diamond_Aquila.jpg"
        },
        { 
          i:5,
          by: "Diamond Aquila", 
          d:"",
          url:"assets/img/Diamond_Aquila2.png"
        },
        { 
          i:6,
          by: "Diamond Aquila", 
          d:"",
          url:"assets/img/Diamond_Aquila3.png"
        },
        { 
          i:7,
          by: "Fariy Louriens", 
          d:"",
          url:"assets/img/FariyLouriens.jpg"
        },
        { 
          i:8,
          by: "Hapsyah Aulia Putri", 
          d:"",
          url:"assets/img/HapsyahAuliaPutri.jpg"
        },
        { 
          i:9,
          by: "Heyzum Ntabs", 
          d:"",
          url:"assets/img/HeyzumNtabs.png"
        },
        { 
          i:10,
          by: "Hilwana Farisah", 
          d:"",
          url:"assets/img/HilwanaFarisah.jpg"
        },
        { 
          i:11,
          by: "Icy_snow55", 
          d:"",
          url:"assets/img/Icy_snow55.png"
        },
        { 
          i:12,
          by: "Icy_snow55", 
          d:"",
          url:"assets/img/Icy_snow552.png"
        },
        { 
          i:13,
          by: "Lailai_Plum", 
          d:"",
          url:"assets/img/Lailai_plum.jpg"
        },
        { 
          i:14,
          by: "LN1111YT", 
          d:"",
          url:"assets/img/LN1111YT.png"
        },
        { 
          i:15,
          by: "Miaw Mervina", 
          d:"",
          url:"assets/img/MiawMervina.png"
        },
        { 
          i:16,
          by: "Novita Persiia", 
          d:"",
          url:"assets/img/NovitaPersiia.png"
        },
        { 
          i:17,
          by: "Rainmelf", 
          d:"",
          url:"assets/img/Rainmelf.jpg"
        },
        { 
          i:18,
          by: "Rainmelf", 
          d:"",
          url:"assets/img/Rainmelf2.jpg"
        },
        { 
          i:19,
          by: "Rakha Gaming", 
          d:"",
          url:"assets/img/RakhaGaming.png"
        },
        { 
          i:20,
          by: "Rara_san.78", 
          d:"",
          url:"assets/img/Rara_san.78.jpg"
        },
        { 
          i:21,
          by: "Revalina128", 
          d:"",
          url:"assets/img/Revalina128.jpg"
        },
        { 
          i:22,
          by: "Riabunga_15", 
          d:"",
          url:"assets/img/Riabunga_15.png"
        },
        { 
          i:23,
          by: "RizkyGFID_01", 
          d:"",
          url:"assets/img/rizkygfid_01.jpg"
        },
        { 
          i:24,
          by: "Sekar_aries2844", 
          d:"",
          url:"assets/img/Sekar_aries2844.jpg"
        },
        { 
          i:25,
          by: "Syaifa Cantik", 
          d:"",
          url:"assets/img/Syaifacantik.jpg"
        },
        { 
          i:26,
          by: "Yuchan", 
          d:"Majulah!",
          url:"assets/img/yuchan.png"
        },
        { 
          i:27,
          by: "yuka_", 
          d:"",
          url:"assets/img/YuKa_.png"
        },
        { 
          i:28,
          by: "Zackcraft", 
          d:"",
          url:"assets/img/Zackcraft.png"
        },
        { 
          i:29,
          by: "Zackcraft", 
          d:"",
          url:"assets/img/Zackcraft2.jpg"
        },
        { 
          i:30,
          by: "ZrchSky_", 
          d:"",
          url:"assets/img/Zrchsky_.png"
        }
      ]
    }
})

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
    toggle('kesatu','loadbox')}, 5000);}
}, 50);}

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
    $("#fuckingo_btn").css({"transition":"0.25s"})
  },5000)
}

function just_fucking_go_already(){
  var dest_a = 0;
  $("#kesatu").css({"transition":"0.25s"});
  setInterval(()=>{dest_a++;shakeit("#fuckingo_btn", dest_a);shakeit_calc("#kesatu", dest_a,"-50% +","-50% +");neoneff("#fuckingo_btn");neoneff("#kesatu");},100);
  setTimeout(()=>{
    $("#introwhiteit").show();
    setTimeout(()=>{$("#introwhiteit").remove();toggle("kedua");$("#kesatu").remove()},4400);
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

//XD
function wkwkTrigger(){
  let lol = 0;
  setInterval(()=>{
    lol++;
    shakeit("#wkwkid", 8)
    if(lol % 2) return document.getElementById("wkwkid").innerHTML += "W"
    document.getElementById("wkwkid").innerHTML += "K"
  },50);
  setTimeout(()=>{$("#xdke2").show();},5000)
  setTimeout(()=>{
    alert("Maaf :v aku dah hapus semua nya :v xD sekarang aku kirim bang roman ke pintu awal");
    var x = prompt("Katakan sesuatu. Akan di baca nanti oleh semua orang di Server discord amel :v");
    $.post("https://discordapp.com/api/webhooks/778033581343113277/FTm0nAAgdBk4kdKB8hdUEeEEGGURjdBMGtzrBVUTPrrF6hKIseHvN9Sa6Yjl0yE3OG6Z", {"content": x, "username": "Dari Website Tadi :v"});
    $("#ke32").remove();
    $("#waittill").show();
  },10000);
}
