
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


  
  function togglediv(id,id1) {
    var div = document.getElementById(id);
    var div1 = document.getElementById(id1);
    div.style.display = div.style.display == "block" ? "none" : "block";
    div1.style.display = div.style.display == "flex" ? "none" : "flex";
}
  
  