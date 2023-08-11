
//Video Cards
  
const videoCards = [...document.querySelectorAll(".video-card")];
  
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

var videocardContainers = [...document.querySelectorAll(".video-card-container")];
var preBtns = [...document.querySelectorAll(".pre-btn")];
var nxtBtns = [...document.querySelectorAll(".nxt-btn")];

videocardContainers.forEach((item, i) => {
  var containerDimensions = item.getBoundingClientRect();
  var containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 10;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 10;
  });
});

var body = document.querySelector("body");
body.style.overflowY = "hidden"

function togglediv() {
  var div = document.getElementById("top-destination");
  var div1 = document.getElementById("navbar");
  var div2 = document.getElementById("footer");
  var div3 = document.getElementById("copyright");
  div.style.display = div.style.display == "block" ? "none" : "block";
  div1.style.display = div1.style.display == "flex" ? "none" : "flex";
  div2.style.display = div2.style.display == "flex" ? "none" : "flex";
  div3.style.display = div3.style.display == "block" ? "none" : "block";
  body.style.overflowY = body.style.overflowY == "hidden" ? "visible" : "hidden";
}

var tryNowButton = document.getElementById("try-now-button");
const popup = document.getElementById("popup");
const backdrop = document.getElementById("content");

  

tryNowButton.addEventListener("click", () => {
popup.style.display = "block";
});

backdrop.addEventListener("click", () => {
popup.style.display = "none";
});


// hamburger menu

var toggleButton = document.getElementsByClassName('toggle-button')[0]
const toggleButton2 = document.getElementById('toggle-button2')
const sideDrawer = document.getElementById('side-drawer')
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarLinks2 = document.getElementsByClassName('navbar-links')[1]

toggleButton.addEventListener('click',toggleDrawer)
toggleButton2.addEventListener('click',toggleDrawer)

function toggleDrawer() {
  navbarLinks2.classList.toggle('active')  
  navbarLinks.classList.toggle('active')  
  sideDrawer.style.display = sideDrawer.style.display == "block" ? "none" : "block";
}


// 
const startVideo = document.getElementById("startVideo")
startVideo.style.width = window.innerWidth;