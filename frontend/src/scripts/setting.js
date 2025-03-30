export default function setting () {
    return `
      <div class="settingRoot">
           <div class="setting-container">
                <div class="changePassword">
                    <h3>Change Password</h3>
                     <form class="changePasswordForm">
                          <label>Password</label>
                          <input type="password" placeholder="Enter password" />
                          <button type="submit">
                              submit
                          </button>
                     </form>
                </div>          
                <div class="changeEmail">
                    <h3>Change Email</h3>
                     <form class="changeEmailForm">
                          <label>Email</label>
                          <input type="text" placeholder="Enter email" />
                          <button type="submit">
                              submit
                          </button>
                     </form>
                </div>          
           
           </div>        
      </div>
   `
}