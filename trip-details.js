const images = [

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",

"https://images.unsplash.com/photo-1506744038136-46273834b3fb",

"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"

];

let currentSlide = 0;

const sliderImage =
document.getElementById("sliderImage");

function nextSlide(){

currentSlide++;

if(currentSlide >= images.length){

currentSlide = 0;

}

sliderImage.src =
images[currentSlide];

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide =
images.length - 1;

}

sliderImage.src =
images[currentSlide];

}

setInterval(() => {

nextSlide();

}, 5000);

const likeBtn =
document.getElementById("likeBtn");

let liked = false;

likeBtn.addEventListener(
"click",
()=>{

liked = !liked;

if(liked){

likeBtn.innerHTML =
"❤️ Liked";

}
else{

likeBtn.innerHTML =
"❤️ Like";

}

}
);

const saveBtn =
document.getElementById("saveBtn");

let saved = false;

saveBtn.addEventListener(
"click",
()=>{

saved = !saved;

if(saved){

saveBtn.innerHTML =
"✅ Saved";

}
else{

saveBtn.innerHTML =
"🔖 Save";

}

}
);

document
.getElementById("shareBtn")
.addEventListener(
"click",
()=>{

navigator.clipboard.writeText(
window.location.href
);

alert(
"Trip Link Copied"
);

}
);

function addComment(){

const commentBox =
document.getElementById(
"commentBox"
);

const text =
commentBox.value.trim();

if(text === ""){

alert(
"Please enter comment"
);

return;

}

const comment =
document.createElement("div");

comment.classList.add(
"comment-item"
);

comment.innerHTML = `

<strong>You</strong>

<p>${text}</p>

`;

document
.getElementById(
"commentList"
)
.prepend(comment);

commentBox.value = "";

}

document.addEventListener(
"keydown",
(e)=>{

if(
e.ctrlKey &&
e.key === "Enter"
){

addComment();

}

}
);

const darkToggle =
document.createElement("button");

darkToggle.innerHTML = "🌙";

darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "12px";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "50%";
darkToggle.style.cursor = "pointer";

document.body.appendChild(
darkToggle
);

darkToggle.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

}
);