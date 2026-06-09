const modal =
document.getElementById("tripModal");

document
.getElementById("openTripModal")
.addEventListener("click",()=>{

modal.style.display="flex";

});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

modal.style.display="none";

});

window.onclick = function(e){

if(e.target===modal){

modal.style.display="none";

}

};

document
.getElementById("createTrip")
.addEventListener("click",()=>{

let destination =
document.getElementById("destination").value;

let date =
document.getElementById("tripDate").value;

let budget =
document.getElementById("budget").value;

let partners =
document.getElementById("partners").value;

if(
destination==="" ||
date==="" ||
budget==="" ||
partners===""){

alert("Please fill all fields");
return;

}

const card = document.createElement("div");

card.classList.add("trip-card");

card.innerHTML = `

<div class="status open">
OPEN
</div>

<div class="user-info">

<img src="https://i.pravatar.cc/80">

<div>

<h3>You</h3>

<p>Trip Creator</p>

</div>

</div>

<h2>${destination}</h2>

<p>📅 ${date}</p>

<p>💰 Budget ₹${budget}</p>

<p>👥 Need ${partners} Partners</p>

<div class="actions">

<button class="join-btn">
Join Trip
</button>

<button class="chat-btn">
Chat
</button>

</div>

`;

document
.getElementById("tripGrid")
.prepend(card);

modal.style.display="none";

alert("Trip Created Successfully");

});

function searchTrips(){

let input =
document
.getElementById("searchInput")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".trip-card");

cards.forEach(card=>{

let text =
card.querySelector("h2")
.innerText
.toLowerCase();

if(text.includes(input)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

}

document
.addEventListener("click",(e)=>{

if(
e.target.classList.contains("join-btn")
){

alert(
"Trip Join Request Sent"
);

}

if(
e.target.classList.contains("chat-btn")
){

let message =
prompt(
"Send Message"
);

if(message){

alert(
"Message Sent:\n\n" + message
);

}

}

});

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);

});