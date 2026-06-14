const texts = [
"Python Developer",
"Django Developer",
"FastAPI Developer",
"Flask Developer",
"React Developer",
"Full Stack Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

setTimeout(() => {
index = 0;
count++;
type();
},1500);

}else{
setTimeout(type,100);
}

})();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll(".card,.project-card,.glass-card")
.forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s";
observer.observe(el);
});