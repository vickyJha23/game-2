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
               body: JSON.stringify(objectEntries),
              credentials: "include",
          })
          if(!response.ok){
               const errorData = await response.json();
               return handleNotification("showNotification", "error", errorData.message || errorData.error.message);
          } 
          const data = await response.json();
          console.log("data from login handler", data);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "http://127.0.0.1:5500/frontend/src/pages/admin.html";
          handleNotification("showNotification", "success", data.message);
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