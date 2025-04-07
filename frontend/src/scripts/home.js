import fetchData from "../utils/fetchData.js";
import displayData from "../utils/displayData.js";


const tableBody = document.querySelector(".resultContainer table tbody");
const resultContainer = document.querySelector(".resultContainer");
const resultDate = document.querySelector(".resultDate");
const loaderWrapper = document.querySelector(".loader-wrapper");
console.log(loaderWrapper);


const initialize = async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    try {      
      loaderWrapper.style.display = "flex";
      const data = await fetchData(`http://localhost:8000/api/v1/game-results/get-currentresult?date=${currentDate}`);
      displayData(resultContainer, resultDate, tableBody, data);
    } catch (error) {
        resultContainer.innerHTML = `<p style="text-align:center; height: 20vh; display: flex; justify-content: center; align-items: center; font-size: 18px; text-transform: capitalize; letter-spacing: 2px;"
        >${error.message}</p>`
    }
    finally{
      loaderWrapper.style.display = "none";
    }
  }

window.addEventListener("DOMContentLoaded", initialize);