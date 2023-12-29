const hamImg = document.querySelector(".ham-img");
const navUlitem = document.querySelector(".nav-mobile-lower")
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});

const servicesLink = document.querySelector(".services-link");
const serviceLinksDiv = document.querySelector(".service-links-div");

serviceLinksDiv.style.display="none";

servicesLink.addEventListener("mouseover",()=>{
    serviceLinksDiv.style.display="block";  
})

servicesLink.addEventListener("mouseout",()=>{
    serviceLinksDiv.style.display="none"; 
})

serviceLinksDiv.addEventListener("mouseover",()=>{
    serviceLinksDiv.style.display="block";
})

serviceLinksDiv.addEventListener("mouseout",()=>{
    serviceLinksDiv.style.display="none";
})