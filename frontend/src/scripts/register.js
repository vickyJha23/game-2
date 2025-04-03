const form = document.querySelector(".registerForm");
const spinner = document.querySelector(".spinner-wrapper");
const submitButton = document.querySelector(".registerForm button");


form.addEventListener("submit", async (e) => {
     e.preventDefault();
     const formData = new FormData(e.target);
     const formObject = Object.fromEntries(formData);
     spinner.style.display = "block";
     submitButton.disabled = true;
    try {
      const response = await fetch("http://localhost:8000/api/v1/user/register", {
          method: "POST",
          body: formData
      });     
      console.log(await response.json());
    //   if(!response.ok){
    //       const errorData = await response.json();
    //        handleNotification("showNotification", "error", errorData.message || errorData.error.message);
    //    }
    //    const data = await response.json();
    //       handleNotification("showNotification", "success", data.message);
    } catch (error) {
          console.log(error);
          handleNotification("showNotification", "error", error.message);
    }
    finally{
          spinner.style.display = "none";
          submitButton.disabled = false;
    }
})

function handleNotification (notificationClass, heighLighterClass, message) {
     console.log()
     const notification = document.querySelector(".notification");
     const heightLighter = document.querySelector(".heighLighter");
     const messageDisplayer = document.querySelector(".message");
      if(!notification || !heightLighter  || !messageDisplayer) {
          return console.log("One or more elements needed");
      }

     if(notificationClass && heighLighterClass && message){
          notification.classList.add(notificationClass);
          heightLighter.classList.add(heighLighterClass);
          messageDisplayer.textContent = message;
          setTimeout(() => {
               notification.classList.remove(notificationClass);
          }, 2000)
     }
     return; 
}