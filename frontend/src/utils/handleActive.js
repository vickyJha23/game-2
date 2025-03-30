function makeLinkActive() {
   if(window.location.pathname === "/admin"){
   const links = document.querySelectorAll(".links a");
   links.forEach((link) => {
      console.log("link", link);
         link.addEventListener("click", (e) => {
              e.preventDefault();
              const activeLink = document.querySelector(".active");
              
               if(activeLink) {
                    activeLink.classList.remove("active");
                     e.target.classList.add("active");
               }
         })
   })
  }
  return;
}

export default makeLinkActive;