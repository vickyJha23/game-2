import dashboard from "../scripts/dashboard.js";
import addData from "../scripts/addData.js";
import setting from "../scripts/setting.js";


import addDataHandler from "./addDataHandler.js";
import dashboardHandler from "./dashboardHandler.js";



const routes = {
    "/dashboard": dashboard,
    "/add-data": addData,
    "/setting": setting
}


const routeHandler = (url) => {
     const page = routes[url] || dashboard;
     document.querySelector(".adminMainContent").innerHTML = page();
     if(url === "/dashboard"){
         return  dashboardHandler();
     }
     if(url === "/add-data"){
           return addDataHandler();
     }
    //  if(url="/setting"){
    //     return settingHandler();
    //  }
}

export default routeHandler;