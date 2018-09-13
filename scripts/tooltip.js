let colors = document.querySelectorAll(".icons__colors");
let tooltip = document.querySelectorAll(".tooltip");
let tooltipLegend = document.querySelectorAll(".tooltip__legend");


for(let i = 0; i < colors.length; i++) {
	colors[i].addEventListener("click", function() {
		tooltipLegend[i].style.visibility = "visible";
		tooltip[i].style.visibility = "visible";
	});
	
	window.addEventListener("click", function(event) {
    	if (event.target !== colors[i]) {
        	tooltip[i].style.visibility = "hidden";
        	tooltipLegend[i].style.visibility = "hidden";
    	}
	});
}
