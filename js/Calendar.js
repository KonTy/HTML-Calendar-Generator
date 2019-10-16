function calendar(arr) {
    let [day,month,year]=arr.map(Number);
    let html = "<table>\n";
    html += " <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    let currentDate = new Date(year, month - 1, 1);
    let lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate();
    if (currentDate.getDay() !== 0) {
        currentDate = new Date(year, month - 2, lastDayOfPreviousMonth - currentDate.getDay() + 1);
    }
 
    let previousMonth = new Date(year, month - 2, 1).getMonth();
    let nextMonth = new Date(year, month, 1).getMonth();
    while (currentDate.getMonth() !== nextMonth ||
    currentDate.getDay() !== 0) {
        if (currentDate.getDay() === 0) {
            html += " <tr>";
        }
        if (currentDate.getMonth() === previousMonth) {
            html += `<td class="prev-month">${currentDate.getDate()}</td>`;
        } else if (currentDate.getMonth() === nextMonth) {
            html += `<td class="next-month">${currentDate.getDate()}</td>`;
        } else if (currentDate.getDate() === day) {
            html += `<td class="today">${currentDate.getDate()}</td>`;
        } else {
            html += `<td>${currentDate.getDate()}</td>`;
        }
        if (currentDate.getDay() === 6) {
            html += "</tr>\n";
        }
 
        currentDate.setDate(currentDate.getDate() + 1);
 
    }
    html += "</table>";
    return html;
}
 
console.log(calendar([24, 12, 2012]));

// function tableCreate(startDate) {
//     var rows = 5,
//         cols = 7;
//         date = startDate;

//     for(var i = 0; i < rows; i++) {
//         calendar = $('#calendar tbody')
//         calendar.append('<tr></tr>');
//         for(var j = 1; j < cols; j++) {
//             calendar.find('tr').eq(i).append('<td>' + getMonthDateString(date) + '<br>&nbsp</td>');
//             date = getNextDay(date)
//         }
//         week += 1
//     }
// }

// /** Returns the date + 24 hours */
// function getNextDay(date){
//     var tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000));
//     return tomorrow
// }

// /** Based on the week the date falls on, return that week's Sunday date */
// function getPrevSundayDate(date){
//     day = date.getDay(0)
//     if(day == 7) {
//         return date
//     } else {
//         return new Date(date.getTime() - day*(24 * 60 * 60 * 1000))
//     }
// }

// /** Returns date in string format mm/dd. Optional padding parameter (bool) to left pad with 0. */
// function getMonthDateString(date, padding = false){
//     var month = date.getMonth() + 1         // Jan = 0 for getMonth()
//     var day = date.getDate()

//     if(padding = true){
//         while(String(month).length < 2)     // pad_len of 2 would be 09/30, 10/01, 10/02, ...
//             month = "0" + month;
//         while(String(day).length < 2)
//             day = "0" + day
//     }

//     return month + '/' + day
// }

// $(document).ready(function(){
//     var start_date = new Date("2018-01-08T12:00:00Z");
//     tableCreate(getPrevSundayDate(start_date));

//     // Event listeners
//     $('#tablecopybtn').click(function() {
//         var emailLink = document.querySelector('#calendar');        // Select the table
//         var range = document.createRange();
//         range.selectNode(emailLink);
//         window.getSelection().addRange(range);

//         try {                                                       // Copy command
//             var successful = document.execCommand('copy');
//             var msg = successful ? 'successful' : 'unsuccessful';
//             console.log('Copy command was ' + msg);
//         } catch(err) {
//             console.log('Oops, unable to copy');
//         }

//         window.getSelection().removeAllRanges();                    // Remove the selections
//     });

//     // alternatively don't use jquery for event listener...
//     // var copyTableBtn = document.querySelector('#tablecopybtn');
//     // copyTableBtn.addEventListener('click', function(event) {
//     //    ...
//     // }
// })



