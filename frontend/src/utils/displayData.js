import formateDate from "./dateFormater.js"


const displayData = (tableBody, data) => {
    if(tableBody && data){
        if(!data.data || data.data.length === 0){
            return tableBody.innerHTML = `<tr style="width: 100%; height: calc(100vh - 337px)"
            ><td colspan="13" style="font-size: 20px; font-family: Arial, Helvetica, sans-serif; color:red;">
            ${data.message}
            </td></tr>`
       }

       const tableBodyContent = data.data.map((item) => {
             return ` <tr data-id="${item._id}">
                           <td>${formateDate(item.date.split("T")[0])}</td>
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
                        </tr>
             `
       })
      tableBody.innerHTML = tableBodyContent.join(" ");
    }
}


export default displayData;