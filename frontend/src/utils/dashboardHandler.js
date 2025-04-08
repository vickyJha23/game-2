import fetchData from "./fetchData.js"


const dashboardHandler = async () => {
    const tableContent = document.querySelector(".dashboardContainer .table-content");
    const tableBody = document.querySelector(".table-content table tbody");
    const loaderWrapper = document.querySelector(".loader-wrapper");
    try { loaderWrapper.style.display="flex";
          const data = await fetchData("http://localhost:8000/api/v1/game-results/get-result");
          if(data.data){
               const tableBodyContent = data.data.map((item) => {
                     return `
                         <tr data-id="${item._id}">
                           <td>${item.date}</td>
                           <td>${item.time}</td>
                           <td>${item.xa}</td>
                           <td>${item.xb}</td>
                           <td>${item.xc}</td>
                           <td>${item.xd}</td>
                           <td>${item.xe}</td>
                           <td>${item.xf}</td>
                           <td>${item.xg}</td>
                           <td>${item.xh}</td>
                           <td>${item.xi}</td>
                           <td>${item.xj}</td>
                           <td class="deleteBtn">
                              <i class="fa-solid fa-trash"></i>
                           </td>
                        </tr>
                     `
               })      
               tableBody.innerHTML = tableBodyContent.join(" ");
          }
          else{
            tableContent.innerHTML = `<p style="width: 100%; text-align:center; height: calc(100vh - 337px); display: flex; justify-content: center; align-items: center; font-size: 25px; text-transform: capitalize; letter-spacing: 2px; color:red;
            "
            >${data.message}</p>`       
          }
     } catch (error) {
         tableContent.innerHTML = `<p style="width: 100%; text-align:center; height: calc(100vh - 337px); display: flex; justify-content: center; align-items: center; font-size: 25px; text-transform: capitalize; letter-spacing: 2px; color:red;
        "
        >${error.message}</p>`
     }
     finally{
          loaderWrapper.style.display="none";
     }
    
}

export default dashboardHandler;