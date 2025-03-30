import "../login.css";

function login () {
    return `
      <div class="loginRoot">
          <div class="loginContainer">
               <h1>
                  login
               </h1>
               <form class="loginForm">               
                    <div>
                         <label for="email">
                           email
                         </label>               
                         <input type="email" id="email" placeholder="Enter email" />
                    </div>               
                    <div>
                         <label for="password">
                            password
                         </label>               
                         <input type="password" id="password" placeholder="Enter password"/>
                    </div>
                    <div>
                         <label for="role">
                            role
                         </label>
                         <select id="role">
                            <option value="admin">admin</option>
                        </select>
                    </div>       
                    <button type="button">
                       submit
                    </button>        
               </form>
           </div>
      </div>
    `    
}


export default login