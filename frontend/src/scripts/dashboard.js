export default function dashboard ()  {
    return `
        <div class="dashboardContainer">
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
                        <tr>
                           <td>25-03-2025</td>
                           <td>09:00</td>
                           <td>XA04</td>
                           <td>XB94</td>
                           <td>XC21</td>
                           <td>XD51</td>
                           <td>XE28</td>
                           <td>XF69</td>
                           <td>XG19</td>
                           <td>XH04</td>
                           <td>XI50</td>
                           <td>XJ21</td>
                           <td class="deleteBtn">
                              <i class="fa-solid fa-trash"></i>
                           </td>
                        </tr>                   
               </tbody>
            </table>
            </div>
        </div>
   `
}