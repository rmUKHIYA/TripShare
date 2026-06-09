function searchTrips() {

let input =
document
.getElementById("searchInput")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".trip-card");

cards.forEach(card => {

let title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(input)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

}

function applyFilters(){

alert(
"Filters will be connected to backend API later."
);

}

const sortSelect =
document.getElementById("sortTrips");

sortSelect.addEventListener(
"change",
function(){

alert(
"Sorting functionality connected later."
);

});
