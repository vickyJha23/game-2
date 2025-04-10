const addDataHandler = () => {
      const form = document.querySelector("#dataForm");
      const spinnerWrapper = document.querySelector(".spinner-wrapper");
      const submitButton = document.querySelector("#dataForm button");
      form.addEventListener("submit", async (e) => {
             e.preventDefault();

             const formData = new FormData(e.target);
             const formObject = Object.fromEntries(formData.entries());
             if(!["date", "time", "xa", "xb", "xc", "xd", "xe", "xf", "xg", "xh", "xi", "xj"].every(key => formObject[key])){
                    return alert("all fields are required");
             }    
             try {
                  spinnerWrapper.style.display = "block";
                  submitButton.disabled = true;
                  const response = await fetch("http://localhost:8000/api/v1/game-results/add-result", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json"
                      },
                      credentials: "include",
                      body: JSON.stringify(formObject) 
                  })
                  console.log(response);     
                  if(!response.ok)
                    {
                         console.log(response.statusText);
                       const errorData = await response.json();
                       console.log(errorData);
                       return alert(errorData.message || errorData.error.message);     
                  }
                  const data = await response.json();
                  alert(data.message);
                  e.target.reset();
             } catch (error) {
               console.log(error);
                   alert(error.message);
             }
             finally{
                    spinnerWrapper.style.display = "none";
                    submitButton.disabled = false;
             }
      })
}


export default addDataHandler