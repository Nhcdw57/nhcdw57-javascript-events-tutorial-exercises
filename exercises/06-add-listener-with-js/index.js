window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
let but = document.querySelector("#theGreen");
but.addEventListener('click',()=>alert("woohoo!"));