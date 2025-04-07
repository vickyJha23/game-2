import { handleNotification } from "./notification.js";

const form = document.querySelector(".registerForm");
const spinner = document.querySelector(".spinner-wrapper");
const submitButton = document.querySelector(".registerForm button");


const registerHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    spinner.style.display = "block";
    submitButton.disabled = true;
    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/register", {
            method: "POST",
            body: formData
        });
        console.log(await response.json());
        if (!response.ok) {
            const errorData = await response.json();
            handleNotification("showNotification", "error", errorData.message || errorData.error.message);
        }
        const data = await response.json();
        handleNotification("showNotification", "success", data.message);
    } catch (error) {
        console.log(error);
        handleNotification("showNotification", "error", error.message);
    } finally {
        spinner.style.display = "none";
        submitButton.disabled = false;
    }     
}


form.addEventListener("submit", registerHandler);


