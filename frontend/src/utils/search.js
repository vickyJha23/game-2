import fetchData from "../utils/fetchData.js";
import displayData from "../utils/displayData.js";
import formateDate from "./dateFormater.js";


      const inputStartDate = document.getElementById("startDate");
      const inputEndDate = document.getElementById("endDate");
      const searchBtn = document.getElementById("searchBtn");
      const tableBody = document.querySelector(".resultContainer table tbody");
      const resultDate = document.querySelector(".resultDate");
      const loaderWrapper = document.querySelector(".loader-wrapper");

      searchBtn.addEventListener("click", async () => {
           if(inputStartDate.value !== "" && inputEndDate.value !== "")
            {
                const startDate = inputStartDate.value;
                const endDate = inputEndDate.value;
              if(startDate !== endDate){
                  resultDate.innerHTML = `from ${formateDate(startDate)} to ${formateDate(endDate)}`;   
               }
               else {
                    resultDate.innerHTML = `${formateDate(startDate)}`;
               }
                const url = `http://localhost:8000/api/v1/game-results/search-result?startDate=${startDate}&endDate=${endDate}`;
                 try {
                      loaderWrapper.style.display = "flex";
                      searchBtn.disabled = "true";
                      const data = await fetchData(url);
                      displayData(tableBody, data);

                    
                 } catch (error) {
                      console.error("Error: at search js", error);
                      tableBody.innerHTML = `<tr style="width: 100%; height: calc(100vh - 337px)"
         ><td colspan="13" style="font-size: 20px; font-family: Arial, Helvetica, sans-serif; color:red;">
        ${error.message}
        </td></tr>`;                        
                 }
                 finally{
                    loaderWrapper.style.display = "none";
                    searchBtn.disabled = false;
                 }
            }    
      })







