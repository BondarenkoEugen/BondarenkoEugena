



let ru = document.getElementById("flag-ru");
let ua = document.getElementById("flag-ua");
ua.style.display = 'none';
let uk = document.getElementById("flag-uk");
uk.style.display = 'none'
let arrowDown = document.getElementById("arrow-lang");

arrowDown.addEventListener("click", function(){
	arrowDown.style.transform == "rotate(180deg)"?
	arrowDown.style.transform = "rotate(0deg)":
	arrowDown.style.transform = "rotate(180deg)";

	ua.style.display == 'block'?
	ua.style.display = uk.style.display = 'none':
	ua.style.display = uk.style.display = 'block';
	
});

