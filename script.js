const slides = document.querySelectorAll(".slide")
let index = 0
function showSlide(){
slides.forEach(s => s.classList.remove("active"))
index++
if(index >= slides.length){
index = 0
}
slides[index].classList.add("active")
}
setInterval(showSlide,4000)


//Footer Start
const footer = document.querySelector(".footer");
const line = document.querySelector(".divider");
const rocket = document.querySelector(".rocket-bg");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
line.classList.add("show");
rocket.classList.add("show");
}
});
},{threshold:0.4});
observer.observe(footer);
//Footer End


//For Menu highlight when selected 
//const menuLinks = document.querySelectorAll(".menu a");
//menuLinks.forEach(link => {
//link.addEventListener("click", function(){
//menuLinks.forEach(l => l.classList.remove("active"));
//this.classList.add("active");
//});
//});
//Menu hithlight End

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
link.addEventListener("click", function(e){
e.preventDefault();

menuLinks.forEach(l => l.classList.remove("active"));
this.classList.add("active");

const targetId = this.getAttribute("href");
const targetSection = document.querySelector(targetId);

targetSection.scrollIntoView({
behavior: "smooth"
});
});
});

//Body Text slide animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const heading = section.querySelector("h2");
    const text = heading.innerText;
    let html = "";

    // Wrap each letter in a span
    for (let i = 0; i < text.length; i++) {
      html += `<span style="transition-delay:${i * 0.05}s">${text[i] === " " ? "&nbsp;" : text[i]}</span>`;
    }

    heading.innerHTML = html;
    // Store total letters to delay paragraph
    heading.style.setProperty("--letters", text.length);
  });

  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% visible
  );

  sections.forEach((section) => observer.observe(section));
});
//Body Text slide animation