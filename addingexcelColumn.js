const Exceljs = require('exceljs')
// traversing from mango to 2 columns ahead to update the value
async function excelTest(searchText,replaceText,change,filePath)
{
    
    const workbook = new Exceljs.Workbook
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1')
    const output = await readExcel(worksheet, searchText, change)

    const cell = worksheet.getCell(output.row,output.column+change.colChange)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath)
}

async function readExcel(worksheet,searchText){
    let output = {row:-1,column:-1}
    worksheet.eachRow((row, rowNumber)=>{
    
        row.eachCell((cell, colNumber)=>{
    
            if(cell.value === searchText)
                {
                    output.row = rowNumber
                    output.column = colNumber
                }
        })
    })
    return output
}
excelTest("Mango","350",{rowchange:0,colChange:2},"C:/Users/ITH/Documents/cypress_excel_testsheet.xlsx")