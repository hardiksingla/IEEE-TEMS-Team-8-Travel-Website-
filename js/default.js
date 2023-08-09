var div = document.getElementById("top-destination");
div.style.display = "none";
var div1 = document.getElementById("navbar");
div1.style.display = "none";
var div2 = document.getElementById("footer");
div2.style.display = "none";
var div3 = document.getElementById("copyright");
div3.style.display = "none";

function openForm() {
    document.getElementById("popup").style.display = "block";
}
  
function closeForm() {
    document.getElementById("popup").style.display = "none";
}