$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
});

	let  part1 = document.getElementById("part-1");
 let  part2 = document.getElementById("part-2");
 let  part3 = document.getElementById("part-3");
 let  part4 = document.getElementById("part-4");
 let  part5 = document.getElementById("part-5");
 let  part6 = document.getElementById("part-6");

window.addEventListener("scroll", function() {
 part1.style.transform = "rotate("+window.pageYOffset+"deg)";
 part2.style.transform = "rotate(-"+window.pageYOffset+"deg)";
 part3.style.transform = "rotate(-"+window.pageYOffset+"deg)";
 part4.style.transform = "rotate("+window.pageYOffset+"deg)";
 part5.style.transform = "rotate(-"+window.pageYOffset+"deg)";
 part6.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});