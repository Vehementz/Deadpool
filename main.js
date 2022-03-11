
const loader = document.querySelector(".loaderContainer");
window.addEventListener("load", function() {
  loader.classList += " hiddenLoader";
})

//--------------------------------



//FIN EN CONSTRUCTION 

//-------------------------

const items = document.getElementsByClassName("pictureSlider");
const nbSlide = items.length;
let count = 0;

function slideSuivante() {
  items[count].classList.remove('active');
  
  if(count < nbSlide - 1) {
      count++;
  }

    else {
      count = 0;
  }


items[count].classList.add('active'); 
}

function slidePrecedente() {
  items[count].classList.remove('active');
  
  if(count > 0) {
      count--;
  }

    else {
      count = nbSlide -1
  }


items[count].classList.add('active');
}


time = 2000;

window.onresize = function() {
  if(window.matchMedia("(max-width:830px)").matches) {

    setIntervalNext();


  }

}

function setIntervalNext() {
  
  items[count].classList.remove('active');
  
  if(count < nbSlide - 1) {
      count++;
  }

    else {
      count = 0;
  }


items[count].classList.add('active'); 

setTimeout("setIntervalNext()", time);

}


window.onload = function() {
  if(window.matchMedia("(max-width:830px)").matches) {

    setIntervalNext();
    
  }

}

function setIntervalNext() {
  
  items[count].classList.remove('active');
  
  if(count < nbSlide - 1) {
      count++;
  }

    else {
      count = 0;
  }


items[count].classList.add('active'); 

setTimeout("setIntervalNext()", time);

}

window.onscroll = function () {
  const height = document.getElementById('header').offsetHeight
  if (window.pageYOffset > height) {
    document.getElementById('fleche').classList.add('visible');
  } else {
    document.getElementById('fleche').classList.remove('visible');
  }
}


function show() {
  document.getElementById('imgPool').style.visibility = 'visible';
// suivant.addEventListener("click", slideSuivante());
}
function show1() {
  document.getElementById('imgPool1').style.visibility = 'visible';
}


function unShow() {
  document.getElementById('imgPool').style.visibility = 'hidden';
}


const quote = [
  "Squat the fcoque ?! C'est quoi ça encore ?",
  "Je suis Pool, Deadpool !",
  "Même que j'lui ai tirer une balle dans le cul, J'vous raconte pas le trou de balle ! Quoi j'ai dit une connerie ?",
  "Bon j'ai envie de dire, un ptit meurtre ? …ça s'refuse pas, c'est comme les glaces à la fraise !",
  "C'était Deadpoolistique. C'est le nouveau mot à la mode pour «fantastique» !",
  "Où est Francis ?",
  "Tout ce que vous voulez, mais pas de costume vert !",
  "Un grand pouvoir entraîne de grandes irresponsabilités",
  "Je plains le petit puceau qui va lui mettre la pression pour coucher.",
  "Et le costume faut pas qu'il soit vert, ni en images de synthèse.",
  "Première fois que je dis ça, t'avale surtout pas.",
  "Hashtag C’estmoiquiaipété",
  "Qu’est ce qu’un joli endroit comme toi fait dans une fille pareille ?",
  "Vous vous demandez pourquoi le costume rouge ? C'est pour que les méchants ne me voient pas saigner. Il y en a un qui a tout compris, il a mis son froc marron.",
  "Ce site internet a été créé par quatre bonobos !"
];

document.getElementById("changeQuote").addEventListener("click", function() {
  let q = quote[ Math.floor( Math.random() * quote.length ) ];
  document.getElementById("quote").innerHTML = q;
  });

function init(){
  const losAngeles ={
    lat:34.04633677809134,
    lng:-118.2167618172136
  }

  const zoomLevel = 7;
  
  const map = L.map('mapid').setView([losAngeles.lat, losAngeles.lng], zoomLevel);

  const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmVuc2JudCIsImEiOiJja3EyM2dld3YwMGE4Mm5vOWNyNGJuaGFxIn0.zKYeaCZD8nY1ERv3WJODtA'
});

mainLayer.addTo(map);

}


function submitForm(event){
  event.preventDefault();
}

function unShow1() {
  document.getElementById('imgPool1').style.visibility = 'hidden';
}

function show2() {
  document.getElementById('imgPool2').style.visibility = 'visible';
 }

function unShow2() {
  document.getElementById('imgPool2').style.visibility = 'hidden';
}

function show3() {
  document.getElementById('imgPool3').style.visibility = 'visible';
 }

function unShow3() {
  document.getElementById('imgPool3').style.visibility = 'hidden';
}

function show4() {
  document.getElementById('imgPool4').style.visibility = 'visible';
 }

function unShow4() {
  document.getElementById('imgPool4').style.visibility = 'hidden';
}

function show5() {
  document.getElementById('imgPool5').style.visibility = 'visible';
}

function unShow5() {
  document.getElementById('imgPool5').style.visibility = 'hidden';
}

const burger = document.querySelector('.burger');

burger.addEventListener('click',() => {
  burger.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
})

const mainBurger = document.querySelector('.burger');

const closeMenu = document.querySelector('.closeMenu');

const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '10';
}

function close(){
  mainMenu.style.top = '-100%';
}

