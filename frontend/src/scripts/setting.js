export default function setting () {
    return `
      <div class="settingRoot">
           <div class="setting-container">
                <div class="changePassword">
                    <h3>Change Password</h3>
                     <form class="changePasswordForm">
                          <label for="newPassword">Password</label>
                          <input type="password" name="newPassword"  placeholder="Enter password" />
                          <button type="submit">
                              submit
                          </button>
                     </form>
                </div>          
                <div class="changeEmail">
                    <h3>Change Email</h3>
                     <form class="changeEmailForm">
                          <label for="newEmail">Email</label>
                          <input type="text" name="newEmail" placeholder="Enter email" />
                          <button type="submit">
                              submit
                          </button>
                     </form>
                </div>          
           
           </div>        
      </div>
   `
}