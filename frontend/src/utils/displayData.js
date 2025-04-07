const displayData = (data) => {
     if(!data) {
          return null;
     }
     if(resultDate.innerHTML !== "") {
          resultDate.innerHTML = "";
     }
      const resultDate = document.querySelector(".resultDate");
      resultDate.innerHTML = data.data.date;
      const table = document.querySelector("table");
      const tableBody = table.querySelector("tbody");
        if(tableBody.innerHTML !== "") {
               tableBody.innerHTML = "";
        }
        const tableData = data.data.map((item) => {
                
        });
      
}


export default displayData;