const modal =
document.getElementById("postModal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

openModal.addEventListener(
"click",
()=>{
modal.style.display="flex";
}
);

closeModal.addEventListener(
"click",
()=>{
modal.style.display="none";
}
);

window.addEventListener(
"click",
(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}
);

document
.getElementById("publishPost")
.addEventListener(
"click",
()=>{

let title =
document.getElementById("postTitle").value;

let text =
document.getElementById("postText").value;

if(title==="" || text===""){

alert("Fill all fields");

return;

}

const feed =
document.querySelector(".feed");

const newPost =
document.createElement("div");

newPost.classList.add("post-card");

newPost.innerHTML = `

<div class="post-header">

<img src="https://i.pravatar.cc/50?img=65">

<div>

<h4>You</h4>

<span>Just now</span>

</div>

</div>

<h3>${title}</h3>

<p>${text}</p>

<div class="post-actions">

<button>❤️ Like</button>

<button>💬 Comment</button>

</div>

`;

feed.prepend(newPost);

modal.style.display="none";

document.getElementById("postTitle").value="";
document.getElementById("postText").value="";

alert("Post Published");

}
);

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

}
);

document
.querySelectorAll(".like-btn")
.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

btn.innerHTML="❤️ Liked";

}
);

});

document
.querySelectorAll(".comment-btn")
.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

let comment=
prompt("Write comment");

if(comment){

alert(
"Comment Added: " + comment
);

}

}
);

});