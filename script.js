// script.js
function createTable() {
    const numRows = parseInt(prompt("Input number of rows:"));
    const numCols = parseInt(prompt("Input number of columns:"));

    if (isNaN(numRows) || isNaN(numCols)) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    const myTable = document.getElementById("myTable");
    myTable.innerHTML = ''; // Clear any existing table content

    for (let i = 0; i < numRows; i++) {
        const row = myTable.insertRow(i);
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
