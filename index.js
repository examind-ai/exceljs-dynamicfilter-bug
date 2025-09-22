const ExcelJS = require('exceljs');

async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('files/workbook-with-dynamic-filter-in-table.xlsx');
}

main();
