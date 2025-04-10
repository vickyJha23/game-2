 const fetchData =  async (url) => {
      try {
          const response = await fetch (url, {
               method: 'GET',
               credentials: "include"
          });
          if(!response.ok){
               const errorData = await response.json();
               return errorData;
           }
           const data = await response.json();
           return data; 
      } catch (error) {
           console.log("Error fetching data", error);
           throw error
      }
}

export default fetchData;