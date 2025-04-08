const displayData = (resultContainer, tableBody, resultDate, data) => {
    if(resultContainer && tableBody && resultDate){
        if(!data.data){
            resultContainer.innerHTML = `<p style="text-align:center; height: calc(100vh - 337px); display: flex; justify-content: center; align-items: center; font-size: 18px;">
               ${data.message}
            </p>`
       }
       else {

       }
    }
}


export default displayData;