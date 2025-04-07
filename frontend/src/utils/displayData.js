const displayData = (resultContainer, tableBody, resultDate, data) => {
    if(!data.data){
         resultContainer.innerHTML = `<p style="text-align:center; height: 20vh; display: flex; justify-content: center; align-items: center; font-size: 18px;">
            ${data.message}
         </p>`
    }

    
}


export default displayData;