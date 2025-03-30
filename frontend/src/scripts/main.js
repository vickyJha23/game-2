// import { handleRouting } from "./routes.js";
// import makeLinkActive from "./utils/handleActive.js";


// window.addEventListener("DOMContentLoaded", () => {
//       handleRouting();
//       makeLinkActive();
  
//       // Exclude routing logic for specific pages
//       if (
//           window.location.pathname !== "/admin" &&
//           window.location.pathname !== "/register" &&
//           window.location.pathname !== "/login"
//       ) {
//           document.body.addEventListener("click", (e) => {
//               const link = e.target.closest("a"); // Find closest anchor tag
//               if (link && link.href.startsWith(window.location.origin)) {
//                   e.preventDefault();
//                   history.pushState(null, "", link.href);
//                   handleRouting();
//               }
//           });
  
//           window.addEventListener("popstate", handleRouting); 
//       }
//   });
  
