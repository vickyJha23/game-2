import fetchData from "../utils/fetchData.js";

const tableBody = document.querySelector(".resultContainer table tbody");
console.log(tableBody);


const initialize = async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    try {
      const data = await fetchData(`http://localhost:8000/api/v1/game-results/get-currentresult?date=${currentDate}`)
      console.log(data);
    } catch (error) {
         console.error(error);
    }
}

window.addEventListener("DOMContentLoaded", initialize);