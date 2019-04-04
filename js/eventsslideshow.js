// This code handles the slideshow of the Events page
// Special thanks to Chirp Internet for the code

// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.


window.addEventListener("DOMContentLoaded", function(e) {

var stage = document.getElementById("stage");
var slideComplete = function(e) { stage.appendChild(arr[0]); };
var arr = stage.getElementsByTagName("a");
for(var i = 0; i < arr.length; i++) {
	arr[i].addEventListener("animationend", slideComplete, false);
}

}, false)}});;