import "../register.css";

function register () {
    return `
      <div class="registerRoot">
          <div class="registerContainer">
               <h1>
                  sign up
               </h1>
               <form class="registerForm">
                    <div>
                         <label for="username">
                           username
                         </label>               
                         <input type="text" id="username" name="username" placeholder="Enter username"/>
                    </div>               
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


export default register