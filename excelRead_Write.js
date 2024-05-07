const Exceljs = require('exceljs')

async function excelTest(){
    let output = {row:-1,column:-1}
    const workbook = new Exceljs.Workbook
    await workbook.xlsx.readFile("C:/Users/ITH/Documents/cypress_excel_testsheet.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow((row, rowNumber)=>{
    
        row.eachCell((cell, colNumber)=>{
    
            if(cell.value === "Banana")
                {
                    // reading the cell's row and column number
                    // console.log(rowNumber)
                    // console.log(colNumber)
                    output.row = rowNumber
                    output.column = colNumber
                }
        })
    })

    const cell = worksheet.getCell(output.row,output.column)
    cell.value = "Republic"
    workbook.xlsx.writeFile("C:/Users/ITH/Documents/cypress_excel_testsheet.xlsx")


}
excelTest()