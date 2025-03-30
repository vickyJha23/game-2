window.addEventListener("DOMContentLoaded", () => {
      const inputStartDate = document.getElementById("startDate");
      const inputEndtDate = document.getElementById("endDate");
      const searchBtn = document.getElementById("searchBtn");
      searchBtn.addEventListener("click", () => {
           if(inputEndtDate.value !== "" && inputStartDate.value !== "")
            {
                const startDate = inputStartDate.value;
                console.log(startDate);
                const endDate = inputEndtDate.value;
                console.log(endDate);
                const url = `http://localhost:3000/search?startDate=${startDate}&endDate=${endDate}`;
            //     if(url){
            //             fetchData(url)
            //             .then((data) => {
            //                   displayData(data);
            //             })
            //             .catch((error) => {
            //                   console.log("Error fetching data", error);
            //             }); 
            //     }
            }    
      })
})






