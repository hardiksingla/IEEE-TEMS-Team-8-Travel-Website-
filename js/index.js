
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
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});



function togglediv() {
  var div = document.getElementById("top-destination");
  var div1 = document.getElementById("navbar");
  div.style.display = div.style.display == "block" ? "none" : "block";
  div1.style.display = div1.style.display == "flex" ? "none" : "flex";
  console.log("clicked bansal");
}

var tryNowButton = document.getElementById("try-now-button");
const popup = document.getElementById("popup");
const backdrop = document.getElementById("content");

console.log(popup,tryNowButton)

tryNowButton.addEventListener("click", () => {
popup.style.display = "block";
});

backdrop.addEventListener("click", () => {
popup.style.display = "none";
});