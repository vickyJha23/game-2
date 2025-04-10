import  { handleNotification } from "./notification.js";


const loginForm = document.querySelector(".loginForm");
const loginButton = document.querySelector(".loginForm button");
const spinner = document.querySelector(".spinner-wrapper");
const loginHandler =  async (e) => {
    e.preventDefault();
    let isValid = true;
    const formData = new FormData(e.target);  
    const objectEntries = Object.fromEntries(formData.entries());
    if(objectEntries.email === "" || objectEntries.password === ""){
         isValid = false;
           handleNotification("showNotification", "error", "Please fill all the fields");
         return;
    }
    if(isValid){
     loginButton.disabled = true;
     spinner.style.display = "block";
     try {
          const response = await fetch("http://localhost:8000/api/v1/auth/login", {
               method: "POST",
               headers: {
                   "Content-Type":"application/json",
               },
               credentials: "include",
               body: JSON.stringify(objectEntries),
          })
          if(!response.ok){
               const errorData = await response.json();
               return handleNotification("showNotification", "error", errorData.message || errorData.error.message);
          } 
          const data = await response.json();
           if(data.status){
                handleNotification("showNotification", "success", data.message);
                setTimeout(() => {
                    window.location.href = "http://127.0.0.1:5500/frontend/src/pages/admin.html";
                }, 3000)
           }
       } catch (error) {
            console.log("error in login handler", error);
             handleNotification("showNotification", "error", error.message);
       }
       finally {
          loginButton.disabled = false;
          spinner.style.display = "none";
       }    
   }
    
}



loginForm.addEventListener("submit", loginHandler)