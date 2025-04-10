import fetchData from "./fetchData.js"


const dashboardHandler = async () => {
    console.log("Har Har Mahadev");
    const tableContent = document.querySelector(".dashboardContainer .table-content");
    const tableBody = document.querySelector(".table-content table tbody");
    const loaderWrapper = document.querySelector(".loader-wrapper");
    try { loaderWrapper.style.display="flex";
          const data = await fetchData("http://localhost:8000/api/v1/game-results/get-result");
          if(data.data){
               const tableBodyContent = data.data.map((item) => {
                     return `
                         <tr data-id="${item._id}">
                           <td>${item.date.split("T")[0]}</td>
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
               const deleteBtns = [...document.querySelectorAll(".deleteBtn")];
               let canDelete = true;
               deleteBtns.forEach((deleteBtn) => {
                    deleteBtn.addEventListener("click", async (e) => {
                         if(!canDelete) return;
                          canDelete = false;
                          const parent = e.currentTarget.parentElement;
                          const parentId = parent.dataset.id;
                          if(parentId){
                               try { 
                                   const res = await fetch(`http://localhost:8000/api/v1/game-results/delete-result/${parentId}`, {
                                        method: "DELETE",
                                        credentials: "include"
                                   });
                                   console.log(await res.json())
                                   if(res.ok){
                                        parent.parentNode.removeChild(parent);
                                   }    

                               } catch (error) {
                                   console.error("Error: while trying to delete", error);
                                   
                               }   
                               finally{
                                      setTimeout(() => {
                                        canDelete = true;
                                      }, 1000)
                               }
                           

                          }
                    })
               })
          }
          else{
            tableBody.innerHTML = `<tr style="width: 100%; height: calc(100vh - 337px)"
            ><td colspan="13" style="font-size: 20px; font-family: Arial, Helvetica, sans-serif; color:red;">
            ${data.message}
            </td></tr>`       
          }
     } catch (error) {
          tableBody.innerHTML = `<tr style="width: 100%; height: calc(100vh - 337px)"
          ><td colspan="13" style="font-size: 20px; font-family: Arial, Helvetica, sans-serif; color:red;">
          ${error.message}
          </td></tr>`
     }
     finally{
          loaderWrapper.style.display="none";
     }
    
}

export default dashboardHandler;