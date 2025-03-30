import routeHandler from "../utils/adminRoute.js";


const toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme")
})

window.addEventListener("DOMContentLoaded", () => {
     const links = [...document.querySelectorAll(".links a")];
      routeHandler(links[0].href)
     links.forEach((link) =>{
        link.addEventListener("click", (e) => {
             e.preventDefault();
             const activeLink = document.querySelector(".active");
             if(activeLink){
                activeLink.classList.remove("active");
                e.target.classList.add("active");
             }
             const href = e.target.getAttribute("href"); 
              routeHandler(href);  

        })
     })
     
})