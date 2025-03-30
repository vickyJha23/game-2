 const fetchData =  async (url) => {
      try {
          const response = await fetch (url, {
             method: "GET",
          });
          if(!response.ok){
               const errorData = await response.json();
               alert(errorData.error.message);
           }
           const data = await response.json();
           return data; 
      } catch (error) {
           console.log("Error fetching data", error);
      }
}

export default fetchData;