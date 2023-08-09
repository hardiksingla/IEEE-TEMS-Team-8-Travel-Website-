var div = document.getElementById("top-destination");
div.style.display = "none";
var div1 = document.getElementById("navbar");
div1.style.display = "none";
var div2 = document.getElementById("footer");
div2.style.display = "none";
var div3 = document.getElementById("copyright");
div3.style.display = "none";

//open and close popup
function openForm() {
    document.getElementById("popup").style.display = "block";
} 
function closeForm() {
    document.getElementById("popup").style.display = "none";
}


//open and close loading page
function openloading() {
    document.getElementById("loading-popup").style.display = "block";
    
    setTimeout(function() {
        document.getElementById("loading-popup").style.display = "none"; // Close loading popup
        document.getElementById("thank-popup").style.display = "block";  // Open thank popup
    }, 10000);
}
function closeloading(){
    document.getElementById("loading-popup").style.display = "none";
}

//close thank page
function closethank() {
    document.getElementById("thank-popup").style.display = "none";
    document.getElementById("popup").style.display = "none";
}