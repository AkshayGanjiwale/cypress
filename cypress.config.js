const { config } = require("chai");
const { defineConfig } = require("cypress");
const Exceljs = require('exceljs');

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    chromeWebSecurity: false,
    env: {
      baseURL: ""
    },
  },
});

async function setupNodeEvents(on, config){
  // implement node event listeners here

  on('task', {
    async excelTest(searchText,replaceText,change,filePath)
    {
        
        const workbook = new Exceljs.Workbook
        await workbook.xlsx.readFile(filePath)
        const worksheet = workbook.getWorksheet('Sheet1')
        const output = await readExcel(worksheet, searchText, change)
    
        const cell = worksheet.getCell(output.row,output.column+change.colChange)
        cell.value = replaceText
        await workbook.xlsx.writeFile(filePath)
    }
  })
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 }
  worksheet.eachRow((row, rowNumber) => {

    row.eachCell((cell, colNumber) => {

      if (cell.value === searchText) {
        output.row = rowNumber
        output.column = colNumber
      }
    })
  })
  return output
}