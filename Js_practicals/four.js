
var fadeColors = ["red", "green", "yellow", "orange", "cyan", "blue", "purple", "pink"];

window.onload = function() {
	var currIdx = Math.floor(Math.random() * 8);
    document.body.style.backgroundColor = fadeColors[currIdx];
 
}

window.onload()