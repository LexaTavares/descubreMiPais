var nav=document.getElementById("nav");
var buttonPlaces=document.getElementById("places");
var buttonGame=document.getElementById("game");

function showBar(){
	var countScroll = document.body.scrollTop;
	if(countScroll>408.8){
		nav.style.display="block";
	} else{
		nav.style.display="none";
	}
}

document.addEventListener("scroll", showBar);alert("hola")