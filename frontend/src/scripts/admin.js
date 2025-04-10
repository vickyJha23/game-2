import fetchData from "../utils/fetchData.js";
import routeHandler from "../utils/adminRoute.js";
const toggleBtn = document.querySelector(".toggleBtn");
const adminImageContainer = document.querySelector(".adminImageContainer");

toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme")
})

const handleUserProfile = async () => {
    try {
        const data = await fetchData("http://localhost:8000/api/v1/auth/get-profile");
        if(data.statusCode !== 401){
            adminImageContainer.innerHTML = `<img src="${data.data.profilePicture}" class="adminImage" />`
        }
        else{
            adminImageContainer.innerHTML = `<a href="/frontend/src/pages/login.html" class="adminLink">
                                     login
                                 </a>`;
        }
      } catch (error) {
           console.log("Error in admin js", error);    
      }
}

window.addEventListener("DOMContentLoaded", async () => {
     const links = [...document.querySelectorAll(".links a")];
     handleUserProfile();

      routeHandler(links[0].getAttribute("href"))
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




