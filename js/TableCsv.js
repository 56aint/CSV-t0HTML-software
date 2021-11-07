export default class {
  /****@param {HTMLTableElement} root Tablllllle element which wil display the csv data */
  constructor(root) {
    this.root = root;
    console.log("this.root");
    /* this.headers = [];
    this.rows = []; */
  }
   // update() method
  /**
   * Clears eixsting data in the table and replaces it with new data.
   * 
   * @param {string[][]} data A 2D array of data to be used as the table body
   * @param {string[]} headerColumns List of headings to be used
   */

  update(data, headerColumns = []) {
    this.clear();
    this.setHeader(headerColumns);
    this.setBody(data);

  }

  // clear() method
  /**
   * Clears all contents of the table (including the header)
   */
  clear() {
    this.root.innerHTML = "";
  }

  // setHeader() method
  /** Sets the table header
   * @param {string[]} headerColumns List of headings to be used
   */
  setHeader(headerColumns) {
    this.root.insertAdjacentHTML("afterbegin", `
    <thead>
    <tr>
    ${headerColumns.map(text => `<th>${text}</th>`).join("")}
    </tr>
    </thead>
    `);
  }

  // getHeader() method
  /**
   * Sets the table body.
   *
   * @param {string[][]} data A 2D array of data to be used as the table body
   */
  setBody(data) {
    const rowsHTML = data.map(row => {
      return `
      <tr>
      ${row.map(text => `<td>${text}</td>`).join("")}
      </tr>
      `;
    });
    this.root.insertAdjacentHTML("beforeend", `
    <tbody>
    ${rowsHTML.join("")}
    </tbody>
    `);
  }
  

}