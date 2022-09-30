// **************************** //
// Exercise 35
// **************************** //

// Create the logic in pure vanilla JS to make the following 
// table sortable by age:  (4 hours)

function sortTableAge() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableAge");        // Get the table element
    switching = true;                                   // To start the switching proccess
    while (switching) {       
        switching = false;                              // Start by saying is not necesary switching again
        rows = table.rows;                              // Get the rows
        for (let i = 1; i < (rows.length - 1); i++) {       // Loop through all table rows (except table headers)
            shouldSwitch = false;                       // Flag to say the rows must not be switched
            x = rows[i].getElementsByTagName("td")[1];  // Get the two rows to be compared, the current and the next one
            y = rows[i + 1].getElementsByTagName("td")[1]; 
            if (x.innerHTML > y.innerHTML) {            // check if the two rows should switch 
                shouldSwitch = true;                    // Must be switched
                break;                                  // Break the loop
            }
        }
        if (shouldSwitch) {                             // To switch the 2 rows previously analyzed 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);  // Make the switch
            switching = true;                           // Continue the while loop
        }
    }
}

