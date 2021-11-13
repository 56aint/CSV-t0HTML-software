import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener("change", (e) => {
  /* console.log(csvFileInput.files[0]); */
  $(document).ready(function () {
    Papa.parse(csvFileInput.files[0], {
      delimiter: ",",
      skipEmptyLines: true,
      complete: (results) => {
        /* console.log(results); */
        /* tableCsv.setData(results.data); */
        tableCsv.update(results.data.slice(1), results.data[0]);
      }
    })
    $( document ).ready(function() {
      $("#csvRoot").tablesorter(); 
     });
  });
});

/* tableCsv.update([
  ["Joe", "Alice", "Nathan"],
  ["Calvin", "Adrian", "Silvester"],
], ["Surname", "Forename", "Preferred"]); */

/* tableCsv.setHeader(["Surname", "Forename", "Preferred"]);
tableCsv.setBody([
  ["Joe", "Alice", "Nathan"],
  ["Calvin", "Adrian", "Silvester"],
]); */