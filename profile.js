const modal =
document.getElementById("profileModal");

document
.getElementById("editProfileBtn")
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
.getElementById("saveProfile")
.addEventListener("click",()=>{

let name =
document
.getElementById("nameInput")
.value;

let bio =
document
.getElementById("bioInput")
.value;

if(name!==""){

document.querySelector(
".profile-card h2"
).innerText=name;

}

if(bio!==""){

document.querySelector(
".bio"
).innerText=bio;

}

modal.style.display="none";

alert(
"Profile Updated"
);

});

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);

});