import dashboard from "../scripts/dashboard.js";
import addData from "../scripts/addData.js";
import setting from "../scripts/setting.js";


import addDataHandler from "../utils/addDataHandler.js";

const routes = {
    "/dashboard": dashboard,
    "/add-data": addData,
    "/setting": setting
}


const routeHandler = (url) => {
     const page = routes[url] || dashboard;
     document.querySelector(".adminMainContent").innerHTML = page();
     if(url === "/add-data"){
           addDataHandler();
     }
}

export default routeHandler;