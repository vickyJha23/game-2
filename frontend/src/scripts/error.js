import "../error.css"

function error () {
     return `<div class="errorRoot">
     <div class="errorContainer">
              <h1 class="rootErrorHeading">
                  Oops ! 
              </h1>
              <h4>404-Page Not found </h4>
              <p>
                 The page you are looking for might have been removed had its name changed or is temporarily unavailable
              </p>
              <a href="/">
                   Go To Home Page
              </a>
         </div>`
}

export default error;