 const fetchData =  async (url) => {
      try {
          console.log(url);
          const response = await fetch (url);
          console.log(await response.json());
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