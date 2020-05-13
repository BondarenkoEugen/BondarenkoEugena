let searchBlock = document.getElementById("header-interface-search");
let searchIcon = document.getElementById("search-img");
let searchInput = document.getElementById("search-input");
let toggleSearch = true; 

searchIcon.addEventListener("click", function(){
	if(toggleSearch){
	searchBlock.style.transform = "translate(0, 50px)";
	searchBlock.style.zIndex = "1";
	searchInput.style.display = 'block'
	toggleSearch = !toggleSearch;
	}
	else {
			searchBlock.style.transform = "translate(0, 0)";
			searchInput.style.display = 'none'
			toggleSearch = !toggleSearch;
		}	

});
