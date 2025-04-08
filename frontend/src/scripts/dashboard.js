export default function dashboard ()  {
    return `
        <div class="dashboardContainer" style="position:relative;">
            <div class="table-content">
                   <table>
                   <thead>
                        <tr>
                           <th>Date</th>
                           <th>Time</th>
                           <th>XA</th>
                           <th>XB</th>
                           <th>XC</th>
                           <th>XD</th>
                           <th>XE</th>
                           <th>XF</th>
                           <th>XG</th>
                           <th>XH</th>
                           <th>XI</th>
                           <th>XJ</th>
                           <th>DELETE</th>
                        </tr>   
                   </thead>
                   <tbody>
                  
               </tbody>
            </table>
            </div>
             <div class="loader-wrapper">
                   <div class="loader">

                   </div>
               </div>
        </div>
   `
}