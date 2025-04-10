import fetchData from "../utils/fetchData.js";
import displayData from "../utils/displayData.js";
import formateDate from "../utils/dateFormater.js";
import "../utils/search.js";

const tableBody = document.querySelector(".resultContainer table tbody");
const resultDate = document.querySelector(".resultDate");
const loaderWrapper = document.querySelector(".loader-wrapper");



const initialize = async () => {
    const currentDate = new Date().toLocaleDateString("en-CA");
    try {      
      loaderWrapper.style.display = "flex";
      const data = await fetchData(`http://localhost:8000/api/v1/game-results/get-currentresult?date=${currentDate}`);
      resultDate.textContent = formateDate(currentDate);
      displayData(tableBody, data);
    } catch (error) {
          tableBody.innerHTML = `<tr style="width: 100%; height: calc(100vh - 337px)"
         ><td colspan="13" style="font-size: 20px; font-family: Arial, Helvetica, sans-serif; color:red;">
        ${error.message}
        </td></tr>`
    }
    finally{
      loaderWrapper.style.display = "none";
    }
  }

window.addEventListener("DOMContentLoaded", initialize);