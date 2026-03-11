/* typing */

const text="Happy Birthday My Love ❤️";
let i=0;

function typing(){

if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,100);
}

}

if(document.getElementById("typing")) typing();

/* gallery modal */

function openModal(img){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=img.src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

/* heart cursor */

document.addEventListener("mousemove",function(e){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},600);

});

/* lyrics sync */

const song=document.getElementById("song");
const lyrics=document.querySelectorAll("#lyrics p");

if(song){

song.ontimeupdate=()=>{

let time=song.currentTime;

lyrics.forEach(line=>{
let t=line.getAttribute("data-time");

if(time>=t){
lyrics.forEach(l=>l.style.color="white");
line.style.color="yellow";
}
});

};

}

function goBack(){
window.history.back();
}